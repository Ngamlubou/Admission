pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_fee_charges (
        device_id TEXT NOT NULL,
        uid TEXT NOT NULL,

        student_device_id TEXT NOT NULL,
        student_uid TEXT NOT NULL,

        enrollment_uid TEXT NOT NULL,
        fee_uid TEXT NOT NULL,

        amount REAL NOT NULL,
        period TEXT NOT NULL,

        PRIMARY KEY (device_id, uid),

        FOREIGN KEY (student_device_id, student_uid)
            REFERENCES students(device_id, uid),

        FOREIGN KEY (enrollment_uid)
            REFERENCES enrollments(uid),

        FOREIGN KEY (fee_uid)
            REFERENCES fees(uid)
    );
";
