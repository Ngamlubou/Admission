#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CalcType {
    /// value is basis points: 1000 = 10.00%
    Percent,
    /// value is minor units
    Fixed,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DiscountInput {
    pub discount_uid: String,
    pub calc_type: CalcType,
    pub value: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AppliedDiscount {
    pub discount_uid: String,
    pub calc_type: CalcType,
    pub rule_value: i64,
    /// what was actually deducted, after the cap
    pub amount_minor: i64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ChargeAmounts {
    pub gross_minor: i64,
    pub discount_minor: i64,
    pub net_minor: i64,
    pub applied: Vec<AppliedDiscount>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ChargeError {
    NegativeGross(i64),
    InvalidRule { discount_uid: String },
}

pub fn calculate_charge(
    gross_minor: i64,
    discounts: &[DiscountInput],
) -> Result<ChargeAmounts, ChargeError> {
    if gross_minor < 0 {
        return Err(ChargeError::NegativeGross(gross_minor));
    }

    // Fixed order, so every device gets the same result when the cap applies.
    let mut sorted: Vec<&DiscountInput> = discounts.iter().collect();
    sorted.sort_by(|a, b| a.discount_uid.cmp(&b.discount_uid));

    let mut remaining = gross_minor;
    let mut applied = Vec::with_capacity(sorted.len());

    for d in sorted {
        let wanted = match d.calc_type {
            CalcType::Percent => {
                if !(0..=10_000).contains(&d.value) {
                    return Err(ChargeError::InvalidRule {
                        discount_uid: d.discount_uid.clone(),
                    });
                }
                // percent of gross, rounded half up, in integer math
                ((gross_minor as i128 * d.value as i128 + 5_000) / 10_000) as i64
            }
            CalcType::Fixed => {
                if d.value < 0 {
                    return Err(ChargeError::InvalidRule {
                        discount_uid: d.discount_uid.clone(),
                    });
                }
                d.value
            }
        };

        let amount = wanted.min(remaining);
        remaining -= amount;

        if amount > 0 {
            applied.push(AppliedDiscount {
                discount_uid: d.discount_uid.clone(),
                calc_type: d.calc_type,
                rule_value: d.value,
                amount_minor: amount,
            });
        }
    }

    Ok(ChargeAmounts {
        gross_minor,
        discount_minor: gross_minor - remaining,
        net_minor: remaining,
        applied,
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    fn pct(uid: &str, bp: i64) -> DiscountInput {
        DiscountInput { discount_uid: uid.into(), calc_type: CalcType::Percent, value: bp }
    }
    fn fixed(uid: &str, amt: i64) -> DiscountInput {
        DiscountInput { discount_uid: uid.into(), calc_type: CalcType::Fixed, value: amt }
    }

    #[test]
    fn no_discounts_net_equals_gross() {
        let r = calculate_charge(150_000, &[]).unwrap();
        assert_eq!((r.gross_minor, r.discount_minor, r.net_minor), (150_000, 0, 150_000));
        assert!(r.applied.is_empty());
    }

    #[test]
    fn percent_is_taken_on_gross() {
        let r = calculate_charge(150_000, &[pct("a", 1_000)]).unwrap();
        assert_eq!(r.discount_minor, 15_000);
        assert_eq!(r.net_minor, 135_000);
    }

    #[test]
    fn percent_rounds_half_up() {
        assert_eq!(calculate_charge(1_005, &[pct("a", 1_000)]).unwrap().discount_minor, 101);
        assert_eq!(calculate_charge(1_004, &[pct("a", 1_000)]).unwrap().discount_minor, 100);
    }

    #[test]
    fn fixed_amount_is_deducted() {
        let r = calculate_charge(10_000, &[fixed("a", 2_500)]).unwrap();
        assert_eq!((r.discount_minor, r.net_minor), (2_500, 7_500));
    }

    #[test]
    fn full_percent_discount_gives_zero_net() {
        let r = calculate_charge(10_000, &[pct("a", 10_000)]).unwrap();
        assert_eq!((r.discount_minor, r.net_minor), (10_000, 0));
    }

    #[test]
    fn discounts_are_capped_at_gross_in_uid_order() {
        let r = calculate_charge(1_000, &[fixed("b", 500), fixed("a", 800)]).unwrap();
        assert_eq!(r.net_minor, 0);
        assert_eq!(r.discount_minor, 1_000);
        assert_eq!(r.applied[0].discount_uid, "a");
        assert_eq!(r.applied[0].amount_minor, 800);
        assert_eq!(r.applied[1].discount_uid, "b");
        assert_eq!(r.applied[1].amount_minor, 200);
        assert_eq!(r.applied[1].rule_value, 500);
    }

    #[test]
    fn input_order_does_not_change_the_result() {
        let one = calculate_charge(5_000, &[pct("a", 2_000), fixed("b", 900), fixed("c", 4_000)]).unwrap();
        let two = calculate_charge(5_000, &[fixed("c", 4_000), pct("a", 2_000), fixed("b", 900)]).unwrap();
        assert_eq!(one, two);
    }

    #[test]
    fn zero_amount_discounts_are_not_recorded() {
        let r = calculate_charge(1_000, &[fixed("a", 1_000), fixed("b", 300)]).unwrap();
        assert_eq!(r.applied.len(), 1);
        assert_eq!(r.applied[0].discount_uid, "a");
    }

    #[test]
    fn zero_gross_has_no_discount_rows() {
        let r = calculate_charge(0, &[pct("a", 5_000)]).unwrap();
        assert_eq!((r.discount_minor, r.net_minor), (0, 0));
        assert!(r.applied.is_empty());
    }

    #[test]
    fn rejects_bad_input() {
        assert_eq!(calculate_charge(-1, &[]), Err(ChargeError::NegativeGross(-1)));
        assert!(matches!(calculate_charge(100, &[pct("a", 10_001)]), Err(ChargeError::InvalidRule { .. })));
        assert!(matches!(calculate_charge(100, &[fixed("a", -5)]), Err(ChargeError::InvalidRule { .. })));
    }

    #[test]
    fn applied_rows_always_sum_to_discount() {
        let r = calculate_charge(7_777, &[pct("a", 3_333), fixed("b", 1_234), pct("c", 9_000)]).unwrap();
        let sum: i64 = r.applied.iter().map(|d| d.amount_minor).sum();
        assert_eq!(sum, r.discount_minor);
        assert_eq!(r.gross_minor - r.discount_minor, r.net_minor);
    }
}
