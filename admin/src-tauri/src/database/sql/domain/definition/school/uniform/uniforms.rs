pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniforms (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        uniform_item_type_id INTEGER NOT NULL
            REFERENCES uniform_item_types(id),

        gender TEXT NOT NULL,
        name TEXT NOT NULL,

        file TEXT,
        file2 TEXT,
        file3_mp4 TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_uniforms_identity
        ON uniforms (
            schools_identity_uid,
            session_uid,
            uniform_item_type_id,
            gender,
            name
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO uniforms (
        uid,
        schools_identity_uid,
        session_uid,
        uniform_item_type_id,
        gender,
        name,
        file,
        file2,
        file3_mp4,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14);
";
