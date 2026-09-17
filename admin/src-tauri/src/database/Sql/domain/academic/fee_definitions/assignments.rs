pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS assignments (
    uid TEXT PRIMARY KEY,

    session_class_uid TEXT NOT NULL,

    fee_type TEXT NOT NULL,
    amount REAL NOT NULL,

    UNIQUE (session_class_uid, fee_type),

    FOREIGN KEY (session_class_uid)
        REFERENCES session_classes(uid)
);
";
