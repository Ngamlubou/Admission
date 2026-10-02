pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_field_options (
        uid TEXT PRIMARY KEY,

        admission_field_uid TEXT NOT NULL,

        name TEXT NOT NULL,

        UNIQUE (admission_field_uid, name),

        FOREIGN KEY (admission_field_uid)
            REFERENCES admission_field(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO admission_field_options (
        uid,
        admission_field_uid,
        name
    )
    VALUES (?1, ?2, ?3);
";
