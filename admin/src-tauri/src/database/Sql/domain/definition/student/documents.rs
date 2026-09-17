pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS student_documents (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    document_type TEXT NOT NULL,
    name TEXT NOT NULL,

    file TEXT NOT NULL,
    file2 TEXT,

    uploaded_at TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);
";
