pub mod academic_details;
pub mod achievements;
pub mod additionals;
pub mod addresses;
pub mod disabilities;
pub mod documents;
pub mod families;
pub mod family_parents;
pub mod students;

pub use academic_details::CREATE_TABLE as ACADEMIC_DETAILS;
pub use achievements::CREATE_TABLE as ACHIEVEMENTS;
pub use additionals::CREATE_TABLE as ADDITIONALS;
pub use addresses::CREATE_TABLE as ADDRESSES;
pub use disabilities::CREATE_TABLE as DISABILITIES;
pub use documents::CREATE_TABLE as DOCUMENTS;
pub use families::CREATE_TABLE as FAMILIES;
pub use family_parents::CREATE_TABLE as FAMILY_PARENTS;
pub use students::CREATE_TABLE as STUDENTS;
