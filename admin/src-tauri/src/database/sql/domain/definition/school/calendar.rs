pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS calendar (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,
        session_uid TEXT NOT NULL,

        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,

        name TEXT NOT NULL,
        kind TEXT NOT NULL,

        UNIQUE (schools_identity_uid, name),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid),

        FOREIGN KEY (session_uid)
            REFERENCES sessions(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO calendar (
        uid,
        schools_identity_uid,
        session_uid,
        start_date,
        end_date,
        name,
        kind
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7);
";
