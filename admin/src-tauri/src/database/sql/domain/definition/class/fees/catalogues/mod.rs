pub mod class_discounts;
pub mod class_fees;

pub use class_discounts::CREATE_TABLE as CLASS_DISCOUNTS;
pub use class_discounts::INSERT as CLASS_DISCOUNTS_INSERT;

pub use class_fees::CREATE_TABLE as CLASS_FEES;
pub use class_fees::INSERT as CLASS_FEES_INSERT;
