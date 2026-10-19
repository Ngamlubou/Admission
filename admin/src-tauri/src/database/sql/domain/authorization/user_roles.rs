pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS user_roles (
        uid TEXT PRIMARY KEY,

        school_membership_uid TEXT NOT NULL
            REFERENCES school_memberships(uid)
            DEFERRABLE INITIALLY DEFERRED,

        role_uid TEXT NOT NULL
            REFERENCES roles(uid)
            DEFERRABLE INITIALLY DEFERRED,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_user_roles_identity
        ON user_roles (
            school_membership_uid,
            role_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO user_roles (
        uid,
        school_membership_uid,
        role_uid,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
