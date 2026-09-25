pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS student_documents (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    document_type_id INTEGER NOT NULL,
    name TEXT NOT NULL,

    file TEXT NOT NULL,
    file2 TEXT,

    uploaded_at TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (document_type_id)
        REFERENCES document_types(id)
);
";

pub const INSERT: &str = "
    INSERT INTO student_documents (
        device_id,
        uid,
        student_device_id,
        student_uid,
        document_type_id,
        name,
        file,
        file2,
        uploaded_at
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9);
";
