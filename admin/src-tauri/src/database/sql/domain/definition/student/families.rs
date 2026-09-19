pub const CREATE_TABLE: &str = "
CREATE TABLE IF NOT EXISTS families (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    family_status TEXT,

    PRIMARY KEY (device_id, uid),

    UNIQUE (student_device_id, student_uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);
";

pub const INSERT: &str = "
    INSERT INTO families (
        device_id,
        uid,
        student_device_id,
        student_uid,
        family_status
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
