pub mod student_disabilities;
pub mod student_fields;
pub mod students;

pub use student_disabilities::CREATE_TABLE as STUDENT_DISABILITIES;
pub use student_disabilities::INSERT as STUDENT_DISABILITIES_INSERT;

pub use student_fields::CREATE_TABLE as STUDENT_FIELDS;
pub use student_fields::INSERT as STUDENT_FIELDS_INSERT;

pub use students::CREATE_TABLE as STUDENTS;
pub use students::INSERT as STUDENTS_INSERT;
