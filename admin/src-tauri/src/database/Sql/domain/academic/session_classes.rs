pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS session_classes (
    uid TEXT PRIMARY KEY,

    session_uid TEXT NOT NULL,
    class_uid TEXT NOT NULL,

    UNIQUE (academic_session_uid, school_class_uid),

    FOREIGN KEY (session_uid)
        REFERENCES sessions(uid),

    FOREIGN KEY (class_uid)
        REFERENCES classes(uid)
);
";
