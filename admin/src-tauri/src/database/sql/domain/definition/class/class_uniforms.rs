pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_uniforms (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL
            REFERENCES classes(uid)
            DEFERRABLE INITIALLY DEFERRED,

        uniform_uid TEXT NOT NULL
            REFERENCES uniforms(uid)
            DEFERRABLE INITIALLY DEFERRED,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_class_uniforms_identity
        ON class_uniforms (class_uid, uniform_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO class_uniforms (
        uid,
        class_uid,
        uniform_uid,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
