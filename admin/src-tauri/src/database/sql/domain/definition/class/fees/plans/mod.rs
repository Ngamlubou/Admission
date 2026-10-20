pub mod discount_rules;
pub mod discount_targets;
pub mod fee_installments;
pub mod fee_pricing;
pub mod fee_pricing_amounts;
pub mod fee_schedules;

pub use discount_rules::CREATE_TABLE as DISCOUNT_RULES;
pub use discount_rules::INSERT as DISCOUNT_RULES_INSERT;

pub use discount_targets::CREATE_TABLE as DISCOUNT_TARGETS;
pub use discount_targets::INSERT as DISCOUNT_TARGETS_INSERT;

pub use fee_installments::CREATE_TABLE as FEE_INSTALLMENTS;
pub use fee_installments::INSERT as FEE_INSTALLMENTS_INSERT;

pub use fee_pricing::CREATE_TABLE as FEE_PRICING;
pub use fee_pricing::INSERT as FEE_PRICING_INSERT;

pub use fee_pricing_amounts::CREATE_TABLE as FEE_PRICING_AMOUNTS;
pub use fee_pricing_amounts::INSERT as FEE_PRICING_AMOUNTS_INSERT;

pub use fee_schedules::CREATE_TABLE as FEE_SCHEDULES;
pub use fee_schedules::INSERT as FEE_SCHEDULES_INSERT;
