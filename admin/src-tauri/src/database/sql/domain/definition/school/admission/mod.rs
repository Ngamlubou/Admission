pub mod admission_field_options;
pub mod admission_field;

pub use admission_field_options::CREATE_TABLE as ADMISSION_FIELD_OPTIONS;
pub use admission_field_options::INSERT as ADMISSION_FIELD_OPTIONS_INSERT;

pub use admission_field::CREATE_TABLE as ADMISSION_FIELD;
pub use admission_field::INSERT as ADMISSION_FIELD_INSERT;
