pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS timings (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,

        name TEXT NOT NULL,
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,

        UNIQUE (schools_identity_uid, name),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO timings (
        uid,
        schools_identity_uid,
        name,
        start_time,
        end_time
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
