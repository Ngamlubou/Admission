pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS roles (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        name TEXT NOT NULL,

        description TEXT,

        is_system INTEGER NOT NULL DEFAULT 0
            CHECK (is_system IN (0, 1)),

        is_highest_administrator INTEGER NOT NULL DEFAULT 0
            CHECK (is_highest_administrator IN (0, 1)),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_roles_name
        ON roles (
            schools_identity_uid,
            name COLLATE NOCASE
        )
        WHERE deleted_at IS NULL;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_roles_highest_administrator
        ON roles (schools_identity_uid)
        WHERE is_highest_administrator = 1
          AND deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO roles (
        uid,
        schools_identity_uid,
        name,
        description,
        is_system,
        is_highest_administrator,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11);
";
