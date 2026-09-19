pub mod additional_fields;
pub mod admission_forms;
pub mod books;
pub mod classes;
pub mod fees;
pub mod timings;
pub mod uniform_sizes;
pub mod uniforms;

pub use additional_fields::CREATE_TABLE as ADDITIONAL_FIELDS;
pub use admission_forms::CREATE_TABLE as ADMISSION_FORMS;
pub use books::CREATE_TABLE as BOOKS;
pub use classes::CREATE_TABLE as CLASSES;
pub use fees::CREATE_TABLE as FEES;
pub use timings::CREATE_TABLE as TIMINGS;
pub use uniform_sizes::CREATE_TABLE as UNIFORM_SIZES;
pub use uniforms::CREATE_TABLE as UNIFORMS;
