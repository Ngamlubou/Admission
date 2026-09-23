pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fees (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,
        fee_type_id INTEGER NOT NULL,

        name TEXT NOT NULL,
        frequency TEXT NOT NULL,

        UNIQUE (schools_identity_uid, fee_type_id, name),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid),

        FOREIGN KEY (fee_type_id)
            REFERENCES fee_types(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO fees (
        uid,
        schools_identity_uid,
        fee_type_id,
        name,
        frequency
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
