pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_disabilities (
        device_id TEXT NOT NULL,
        uid TEXT NOT NULL,

        student_device_id TEXT NOT NULL,
        student_uid TEXT NOT NULL,

        disability_type_id INTEGER NOT NULL,

        PRIMARY KEY (device_id, uid),

        UNIQUE (student_device_id, student_uid, disability_type_id),

        FOREIGN KEY (student_device_id, student_uid)
            REFERENCES students(device_id, uid),

        FOREIGN KEY (disability_type_id)
            REFERENCES disability_types(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO student_disabilities (
        device_id,
        uid,
        student_device_id,
        student_uid,
        disability_type_id
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
