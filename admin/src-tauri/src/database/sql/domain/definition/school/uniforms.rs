pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniforms (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL,
        uniform_item_type_id INTEGER NOT NULL,

        gender TEXT NOT NULL,
        name TEXT NOT NULL,
        file TEXT,
        file2 TEXT,

        UNIQUE (schools_identity_uid, uniform_item_type_id, gender, name),

        FOREIGN KEY (schools_identity_uid)
            REFERENCES schools_identity(uid),

        FOREIGN KEY (uniform_item_type_id)
            REFERENCES uniform_item_types(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO uniforms (
        uid,
        schools_identity_uid,
        uniform_item_type_id,
        gender,
        name,
        file,
        file2
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7);
";
