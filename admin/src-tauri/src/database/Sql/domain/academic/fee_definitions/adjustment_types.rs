pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS adjustment_types (
    uid TEXT PRIMARY KEY,

    school_identity_uid TEXT NOT NULL,

    name TEXT NOT NULL,

    FOREIGN KEY (school_identity_uid)
        REFERENCES schools_identity(uid)
);
";
