pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS enrollments (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    session_class_uid TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (session_class_uid)
        REFERENCES session_classes(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO enrollments (
        device_id,
        uid,
        student_device_id,
        student_uid,
        session_class_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
