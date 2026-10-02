pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS discounts (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        discount_type_id INTEGER NOT NULL
            REFERENCES discount_types(id),

        name TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_discounts_identity
        ON discounts (
            schools_identity_uid,
            discount_type_id,
            name
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO discounts (
        uid,
        schools_identity_uid,
        discount_type_id,
        name,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5,
        ?6, ?7, ?8, ?9
    );
";
