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

            // Master / Reference
            domain::FEE_TYPES,
            domain::UNIFORM_ITEM_TYPES,
            domain::DISABILITY_TYPES,
            domain::ADMISSION_FIELDS_TYPES,
            domain::CALENDAR_EVENT_TYPES,
            domain::CLASS_LEVELS,
            domain::FREQUENCIES,

            // School
            domain::SCHOOLS_IDENTITY,
            domain::SESSIONS,
            domain::BOOK_TYPES,
            domain::BOOK_SUBJECTS,
            domain::TIMINGS,
            domain::UNIFORMS,
            domain::UNIFORM_SIZES,
            domain::FEES,
            domain::CALENDAR,
            domain::ADMISSION_FIELD_OPTIONS,
            domain::ADMISSION_FIELD,

            // Classes
            domain::CLASSES,
            domain::CLASS_UNIFORMS,
            domain::CLASS_TIMINGS,
            domain::CLASS_FEES,
            domain::CLASS_CALENDAR,
            domain::CLASS_ADMISSION_FIELD,
            domain::BOOKS,

            // Students
            domain::STUDENTS,
            domain::STUDENT_FIELDS,
            domain::STUDENT_DISABILITIES,
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
