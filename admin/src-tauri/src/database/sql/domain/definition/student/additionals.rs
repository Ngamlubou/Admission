pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_additionals (
        device_id TEXT NOT NULL,
        uid TEXT NOT NULL,

        student_device_id TEXT NOT NULL,
        student_uid TEXT NOT NULL,

        field_uid TEXT NOT NULL,
        value TEXT NOT NULL,

        PRIMARY KEY (device_id, uid),

        UNIQUE (student_device_id, student_uid, field_uid),

        FOREIGN KEY (student_device_id, student_uid)
            REFERENCES students(device_id, uid),

        FOREIGN KEY (field_uid)
            REFERENCES additional_fields(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO student_additionals (
        device_id,
        uid,
        student_device_id,
        student_uid,
        field_uid,
        value
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6);
";
