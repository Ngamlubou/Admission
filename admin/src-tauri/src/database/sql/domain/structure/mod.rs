use rusqlite::Connection;

pub mod authorization;
pub mod class;
pub mod school;
pub mod student;

pub fn create_tables(
    connection: &Connection,
) -> rusqlite::Result<()> {
    connection.execute_batch(
        &[
            school::CALENDAR_EVENT_TYPES,
            school::ADMISSION_FIELDS_TYPES,
            school::FEE_TYPES,
            school::FREQUENCIES,

            class::CLASS_LEVELS,

            student::UNIFORM_ITEM_TYPES,
            student::DISABILITY_TYPES,
            student::DOCUMENT_TYPES,

            authorization::PERMISSIONS,
        ]
        .join("\n"),
    )?;

    Ok(())
}
