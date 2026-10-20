pub mod student_discounts;
pub mod student_fees;

pub use student_discounts::CREATE_TABLE as STUDENT_DISCOUNTS;
pub use student_discounts::INSERT as STUDENT_DISCOUNTS_INSERT;

pub use student_fees::CREATE_TABLE as STUDENT_FEES;
pub use student_fees::INSERT as STUDENT_FEES_INSERT;
