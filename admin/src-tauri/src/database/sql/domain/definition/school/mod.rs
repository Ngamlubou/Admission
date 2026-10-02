pub mod schools_identity;
pub mod timing;
pub mod admission;
pub mod books;
pub mod uniform;
pub mod fee;
pub mod calendar;
pub mod academic;

pub use timing::*;
pub use admission::*;
pub use books::*;
pub use uniform::*;
pub use fee::*;
pub use calendar::*;
pub use academic::*;

pub use schools_identity::CREATE_TABLE as SCHOOLS_IDENTITY;
pub use schools_identity::INSERT as SCHOOLS_IDENTITY_INSERT;
