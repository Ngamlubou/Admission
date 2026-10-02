pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_field (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,

        field_id INTEGER,
        name TEXT NOT NULL,

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid),

        FOREIGN KEY (field_id)
            REFERENCES admission_field_types(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO admission_field (
        uid,
        schools_identity_uid,
        field_id,
        name
    )
    VALUES (?1, ?2, ?3, ?4);
";
