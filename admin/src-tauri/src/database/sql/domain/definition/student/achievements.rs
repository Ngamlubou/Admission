pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS student_achievements (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    title TEXT NOT NULL,
    description TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);
";

pub const INSERT: &str = "
    INSERT INTO student_achievements (
        device_id,
        uid,
        student_device_id,
        student_uid,
        title,
        description
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6);
";
