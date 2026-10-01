pub mod classes;
pub mod class_uniforms;
pub mod class_timings;
pub mod class_fees;
pub mod class_calendar;
pub mod class_admission_field;
pub mod books;

pub use classes::CREATE_TABLE as CLASSES;
pub use classes::INSERT as CLASSES_INSERT;

pub use class_uniforms::CREATE_TABLE as CLASS_UNIFORMS;
pub use class_uniforms::INSERT as CLASS_UNIFORMS_INSERT;

pub use class_timings::CREATE_TABLE as CLASS_TIMINGS;
pub use class_timings::INSERT as CLASS_TIMINGS_INSERT;

pub use class_fees::CREATE_TABLE as CLASS_FEES;
pub use class_fees::INSERT as CLASS_FEES_INSERT;

pub use class_calendar::CREATE_TABLE as CLASS_CALENDAR;
pub use class_calendar::INSERT as CLASS_CALENDAR_INSERT;

pub use class_admission_field::CREATE_TABLE as CLASS_ADMISSION_FIELD;
pub use class_admission_field::INSERT as CLASS_ADMISSION_FIELD_INSERT;

pub use books::CREATE_TABLE as BOOKS;
pub use books::INSERT as BOOKS_INSERT;
