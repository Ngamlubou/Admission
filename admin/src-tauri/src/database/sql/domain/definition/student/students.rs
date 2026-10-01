pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS students (
        device_id TEXT NOT NULL,
        uid TEXT NOT NULL,

        schools_identity_uid TEXT NOT NULL,

        created_at TEXT NOT NULL,

        PRIMARY KEY (device_id, uid),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO students (
        device_id,
        uid,
        schools_identity_uid,
        created_at
    )
    VALUES (?1, ?2, ?3, ?4);
";
