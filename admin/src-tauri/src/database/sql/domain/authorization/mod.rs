use rusqlite::Connection;

pub mod school;
pub mod user;

pub fn create_tables(
    connection: &Connection,
) -> rusqlite::Result<()> {
    connection.execute_batch(
        &[
            school::ROLE_PERMISSIONS,
            school::ROLES,

            user::SCHOOL_MEMBERSHIPS,
            user::USER_ROLES,
            user::USERS,
        ]
        .join("\n"),
    )?;

    Ok(())
}

