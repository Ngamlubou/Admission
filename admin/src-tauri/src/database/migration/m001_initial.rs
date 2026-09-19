use rusqlite::Connection;

use crate::database::migration::Migration;
use crate::database::sql::{application, domain};

fn up(connection: &Connection) -> rusqlite::Result<()> {
    connection.execute_batch(
        r#"
        PRAGMA foreign_keys = ON;
        "#,
    )?;

   connection.execute_batch(
    &[
        // Application
        application::SETTINGS,
        application::SYNC_MUTATIONS,
        application::SYNC_RECORD_VERSIONS,

        // Structure
        domain::ADMISSION_FORM_FIELDS,
        domain::DISABILITY_TYPES,

        // School definition
        domain::SCHOOLS_IDENTITY,
        domain::EDUCATION_CATEGORIES,
        domain::SESSIONS,

        // Class definition
        domain::CLASSES,
        domain::TIMINGS,
        domain::FEES,
        domain::UNIFORMS,
        domain::UNIFORM_SIZES,
        domain::BOOKS,
        domain::ADMISSION_FORMS,
        domain::ADDITIONAL_FIELDS,

        // Student definition/data
        domain::STUDENTS,
        domain::ACADEMIC_DETAILS,
        domain::ACHIEVEMENTS,
        domain::ADDITIONALS,
        domain::DISABILITIES,
        domain::FAMILIES,
        domain::FAMILY_PARENTS,
        domain::ADDRESSES,
        domain::DOCUMENTS,

        // Academic relationships
        domain::SESSION_CLASSES,
        domain::ENROLLMENTS,
        domain::STUDENT_FEE_CHARGES,
        domain::FEE_TRANSACTIONS,
    ]
    .join("\n"),
)?;

    Ok(())
}

pub fn m001_initial() -> Migration {
    Migration {
        version: 1,
        name: "initial",
        up,
    }
}
