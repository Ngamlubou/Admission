pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS sessions (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,

        name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,

        UNIQUE (schools_identity_uid, name),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO sessions (
        uid,
        schools_identity_uid,
        name,
        start_date,
        end_date
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
