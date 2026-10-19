pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniform_sizes (
        uid TEXT PRIMARY KEY,

        uniform_uid TEXT NOT NULL
            REFERENCES uniforms(uid)
            DEFERRABLE INITIALLY DEFERRED,

        size TEXT NOT NULL,
        price_minor INTEGER
            CHECK (price_minor IS NULL OR price_minor >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_uniform_sizes_identity
        ON uniform_sizes (uniform_uid, size)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO uniform_sizes (
        uid,
        uniform_uid,
        size,
        price_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9);
";
