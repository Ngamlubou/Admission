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
