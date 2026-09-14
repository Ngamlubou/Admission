use rusqlite::Connection;

use crate::database::migration::Migration;
fn up(connection: &Connection)
-> rusqlite::Result<()> {

connection.execute_batch(
        r#"
PRAGMA foreign_keys = ON;

-- ============================================================
-- SETTINGS
-- ============================================================

CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);


-- ============================================================
-- SYNC MUTATIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS sync_mutations (
    mutation_id INTEGER PRIMARY KEY,
    operation TEXT NOT NULL,
    entity TEXT NOT NULL,
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,
    base_version INTEGER NOT NULL,
    data TEXT,
    created_at TEXT NOT NULL
);


-- ============================================================
-- SYNC RECORD VERSIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS sync_record_versions (
    entity TEXT NOT NULL,
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,
    server_version INTEGER NOT NULL,

    PRIMARY KEY (entity, device_id, uid)
);


-- ============================================================
-- SCHOOLS
-- ============================================================

CREATE TABLE IF NOT EXISTS schools (
    uid TEXT PRIMARY KEY,

    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL
);


-- ============================================================
-- EDUCATION CATEGORIES
-- ============================================================

CREATE TABLE IF NOT EXISTS education_categories (
    uid TEXT PRIMARY KEY,

    school_uid TEXT NOT NULL,
    name TEXT NOT NULL,

    UNIQUE (school_uid, name),

    FOREIGN KEY (school_uid)
        REFERENCES schools(uid)
);


-- ============================================================
-- ACADEMIC SESSIONS
-- ============================================================

CREATE TABLE IF NOT EXISTS academic_sessions (
    uid TEXT PRIMARY KEY,

    education_category_uid TEXT NOT NULL,
    name TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,

    UNIQUE (education_category_uid, name),

    FOREIGN KEY (education_category_uid)
        REFERENCES education_categories(uid)
);


-- ============================================================
-- SCHOOL CLASSES
-- ============================================================

CREATE TABLE IF NOT EXISTS school_classes (
    uid TEXT PRIMARY KEY,

    education_category_uid TEXT NOT NULL,
    name TEXT NOT NULL,
    admission_form_conf TEXT,
    uniform_conf TEXT,

    UNIQUE (education_category_uid, name),

    FOREIGN KEY (education_category_uid)
        REFERENCES education_categories(uid)
);


-- ============================================================
-- ACADEMIC SESSION CLASSES
-- ============================================================

CREATE TABLE IF NOT EXISTS academic_session_classes (
    uid TEXT PRIMARY KEY,

    academic_session_uid TEXT NOT NULL,
    school_class_uid TEXT NOT NULL,
    books_conf TEXT,

    UNIQUE (academic_session_uid, school_class_uid),

    FOREIGN KEY (academic_session_uid)
        REFERENCES academic_sessions(uid),

    FOREIGN KEY (school_class_uid)
        REFERENCES school_classes(uid)
);


-- ============================================================
-- CLASS TIMINGS
-- ============================================================

CREATE TABLE IF NOT EXISTS class_timings (
    uid TEXT PRIMARY KEY,

    school_class_uid TEXT NOT NULL,
    name TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,

    UNIQUE (school_class_uid),

    FOREIGN KEY (school_class_uid)
        REFERENCES school_classes(uid)
);


-- ============================================================
-- STUDENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS students (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    school_uid TEXT NOT NULL,

    admission_number TEXT,
    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT,
    date_of_birth TEXT,
    gender TEXT,
    blood_group TEXT,
    social_category TEXT,
    minority_status TEXT,
    cwsn_status TEXT,
    aadhaar_number TEXT,
    pen TEXT,
    created_at TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (school_uid)
        REFERENCES schools(uid)
);


-- ============================================================
-- STUDENT FAMILIES
-- ============================================================

CREATE TABLE IF NOT EXISTS student_families (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    father_full_name TEXT,
    mother_full_name TEXT,
    guardian_name TEXT,
    whatsapp_number TEXT,
    alternative_number TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);


-- ============================================================
-- STUDENT ADDRESSES
-- ============================================================

CREATE TABLE IF NOT EXISTS student_addresses (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    permanent_address TEXT,
    permanent_pincode TEXT,
    current_address TEXT,
    current_pincode TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);


-- ============================================================
-- STUDENT ACADEMIC DETAILS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_academic_details (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    result_type TEXT,
    result_value TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);


-- ============================================================
-- STUDENT DOCUMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_documents (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    document_type TEXT NOT NULL,
    file_reference TEXT NOT NULL,
    uploaded_at TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);


-- ============================================================
-- STUDENT ENROLLMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_enrollments (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    academic_session_class_uid TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (academic_session_class_uid)
        REFERENCES academic_session_classes(uid)
);


-- ============================================================
-- CLASS FEE ASSIGNMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS class_fee_assignments (
    uid TEXT PRIMARY KEY,

    academic_session_class_uid TEXT NOT NULL,

    fee_type TEXT NOT NULL,
    amount REAL NOT NULL,

    UNIQUE (academic_session_class_uid, fee_type),

    FOREIGN KEY (academic_session_class_uid)
        REFERENCES academic_session_classes(uid)
);


-- ============================================================
-- FEE ADJUSTMENT TYPES
-- ============================================================

CREATE TABLE IF NOT EXISTS fee_adjustment_types (
    uid TEXT PRIMARY KEY,

    school_uid TEXT NOT NULL,

    name TEXT NOT NULL,

    FOREIGN KEY (school_uid)
        REFERENCES schools(uid)
);


-- ============================================================
-- STUDENT FEE ADJUSTMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_fee_adjustments (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    class_fee_assignment_uid TEXT NOT NULL,
    fee_adjustment_type_uid TEXT NOT NULL,

    amount REAL NOT NULL,
    months TEXT,
    reason TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (class_fee_assignment_uid)
        REFERENCES class_fee_assignments(uid),

    FOREIGN KEY (fee_adjustment_type_uid)
        REFERENCES fee_adjustment_types(uid)
);


-- ============================================================
-- STUDENT FEE STATUS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_fee_status (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    class_fee_assignment_uid TEXT NOT NULL,

    months TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (class_fee_assignment_uid)
        REFERENCES class_fee_assignments(uid)
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
