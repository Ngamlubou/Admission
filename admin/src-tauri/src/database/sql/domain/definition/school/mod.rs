pub mod schools_identity;
pub mod education_categories;
pub mod sessions;

pub use schools_identity::CREATE_TABLE as SCHOOLS_IDENTITY;
pub use education_categories::CREATE_TABLE as EDUCATION_CATEGORIES;
pub use sessions::CREATE_TABLE as SESSIONS;
