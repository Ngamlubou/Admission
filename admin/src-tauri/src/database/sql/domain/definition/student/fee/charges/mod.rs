pub mod fee_charge_discounts;
pub mod fee_charges;

pub use fee_charge_discounts::CREATE_TABLE as FEE_CHARGE_DISCOUNTS;
pub use fee_charge_discounts::INSERT as FEE_CHARGE_DISCOUNTS_INSERT;

pub use fee_charges::CREATE_TABLE as FEE_CHARGES;
pub use fee_charges::INSERT as FEE_CHARGES_INSERT;
