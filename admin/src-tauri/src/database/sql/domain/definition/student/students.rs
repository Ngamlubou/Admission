pub const CREATE_TABLE: &str = "
  CREATE TABLE IF NOT EXISTS students (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    schools_identity_uid TEXT NOT NULL,

    admission_number TEXT,
    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT,
    date_of_birth TEXT,
    gender TEXT,
    blood_group TEXT,
    social_category TEXT,
    minority_status TEXT,
    aadhaar_number TEXT,
    pen TEXT,
    created_at TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (schools_identity_uid)
        REFERENCES schools_identity(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO students (
        device_id,
        uid,
        schools_identity_uid,
        admission_number,
        first_name,
        middle_name,
        last_name,
        date_of_birth,
        gender,
        blood_group,
        social_category,
        minority_status,
        aadhaar_number,
        pen,
        created_at
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5,
        ?6, ?7, ?8, ?9, ?10,
        ?11, ?12, ?13, ?14, ?15
    );
";
