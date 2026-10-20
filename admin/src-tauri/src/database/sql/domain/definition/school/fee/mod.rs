pub mod fees;
pub mod discounts;

pub use fees::CREATE_TABLE as FEES;
pub use fees::INSERT as FEES_INSERT;

pub use discounts::CREATE_TABLE as DISCOUNTS;
pub use discounts::INSERT as DISCOUNTS_INSERT;
