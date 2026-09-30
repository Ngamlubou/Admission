pub mod uniforms;
pub mod uniform_sizes;
pub mod timings;
pub mod sessions;
pub mod schools_identity;
pub mod fees;
pub mod education_categories;
pub mod calendar;
pub mod admission_field;
pub mod admission_field_options;

pub use admission_field::CREATE_TABLE as ADMISSION_FIELD;
pub use admission_field::INSERT as ADMISSION_FIELD_INSERT;

pub use admission_field_options::CREATE_TABLE as ADMISSION_FIELD_OPTIONS;
pub use admission_field_options::INSERT as ADMISSION_FIELD_OPTIONS_INSERT;

pub use uniforms::CREATE_TABLE as UNIFORMS;
pub use uniforms::INSERT as UNIFORMS_INSERT;

pub use uniform_sizes::CREATE_TABLE as UNIFORM_SIZES;
pub use uniform_sizes::INSERT as UNIFORM_SIZES_INSERT;

pub use timings::CREATE_TABLE as TIMINGS;
pub use timings::INSERT as TIMINGS_INSERT;

pub use sessions::CREATE_TABLE as SESSIONS;
pub use sessions::INSERT as SESSIONS_INSERT;

pub use schools_identity::CREATE_TABLE as SCHOOLS_IDENTITY;
pub use schools_identity::INSERT as SCHOOLS_IDENTITY_INSERT;

pub use fees::CREATE_TABLE as FEES;
pub use fees::INSERT as FEES_INSERT;

pub use education_categories::CREATE_TABLE as EDUCATION_CATEGORIES;
pub use education_categories::INSERT as EDUCATION_CATEGORIES_INSERT;

pub use calendar::CREATE_TABLE as CALENDAR;
pub use calendar::INSERT as CALENDAR_INSERT;
