use rusqlite::Connection;

use crate::database::migration::Migration;
fn up(connection: &Connection)
-> rusqlite::Result<()> {

connection.execute_batch(
        r#"
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS student_details (
    code TEXT PRIMARY KEY,
    registration_no TEXT UNIQUE,
    student_name TEXT NOT NULL,
    standard TEXT,
    father_name TEXT,
    mother_name TEXT,
    whatsapp_no TEXT,
    alternate_no TEXT,
    gender TEXT,
    dob TEXT,
    social_category TEXT,
    minority_status TEXT,
    blood_group TEXT,
    aadhaar_no TEXT,
     pen_no TEXT,

     current_address TEXT,
    permanent_address TEXT,
    pincode TEXT,

    score_type TEXT,
    percentage REAL,
    cgpa REAL,
    grade TEXT,

    uniform TEXT,
    extra_books TEXT,
    notebooks TEXT,
    textbooks TEXT,

    tuition_schedule TEXT,
    hostel_schedule TEXT,
    tuition_status TEXT,
    hostel_status TEXT,
    benefit TEXT,

    sync_status TEXT NOT NULL DEFAULT 'pending',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
        "#,
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
