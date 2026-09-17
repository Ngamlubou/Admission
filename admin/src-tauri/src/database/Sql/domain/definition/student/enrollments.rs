pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS enrollments (
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
";
