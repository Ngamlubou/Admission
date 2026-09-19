pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS student_academic_details (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    result_type TEXT NOT NULL,
    result_value TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    UNIQUE (student_device_id, student_uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);
";

pub const INSERT: &str = "
    INSERT INTO student_academic_details (
        device_id,
        uid,
        student_device_id,
        student_uid,
        result_type,
        result_value
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6);
";
