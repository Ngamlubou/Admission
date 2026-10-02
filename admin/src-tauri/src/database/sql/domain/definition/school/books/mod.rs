pub mod book_types;
pub mod book_subjects;

pub use book_types::CREATE_TABLE as BOOK_TYPES;
pub use book_types::INSERT as BOOK_TYPES_INSERT;

pub use book_subjects::CREATE_TABLE as BOOK_SUBJECTS;
pub use book_subjects::INSERT as BOOK_SUBJECTS_INSERT;
