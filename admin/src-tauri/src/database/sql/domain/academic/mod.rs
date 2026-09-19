pub mod enrollments;
pub mod fee_transactions;
pub mod session_classes;
pub mod student_fee_charges;

pub use enrollments::CREATE_TABLE as ENROLLMENTS;
pub use fee_transactions::CREATE_TABLE as FEE_TRANSACTIONS;
pub use session_classes::CREATE_TABLE as SESSION_CLASSES;
pub use student_fee_charges::CREATE_TABLE as STUDENT_FEE_CHARGES;
