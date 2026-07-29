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

CREATE TABLE IF NOT EXISTS students (
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

    sync_status TEXT NOT NULL DEFAULT 'pending',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_address (
    student_code TEXT PRIMARY KEY,

    current_address TEXT,
    permanent_address TEXT,
    pincode TEXT,

    FOREIGN KEY(student_code)
        REFERENCES students(code)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_academic (
    student_code TEXT PRIMARY KEY,

    score_type TEXT,
    percentage REAL,
    cgpa REAL,
    grade TEXT,

    FOREIGN KEY(student_code)
        REFERENCES students(code)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_demographic (
    student_code TEXT PRIMARY KEY,

    social_category TEXT,
    minority_status TEXT,
    blood_group TEXT,

    aadhaar_no TEXT,
     pen_no TEXT,

    FOREIGN KEY(student_code)
        REFERENCES students(code)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_material (
    student_code TEXT PRIMARY KEY,

    uniform TEXT,
    books TEXT,

    FOREIGN KEY(student_code)
        REFERENCES students(code)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS student_fee (
    student_code TEXT PRIMARY KEY,

    tuition_schedule TEXT,
    hostel_schedule TEXT,

    tuition_status TEXT,
    hostel_status TEXT,

    benefit TEXT,

    FOREIGN KEY(student_code)
        REFERENCES students(code)
        ON DELETE CASCADE
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
