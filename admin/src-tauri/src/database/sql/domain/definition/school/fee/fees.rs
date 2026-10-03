pub const CREATE_TABLE: &str = "
    CREATE TABLE fees (
    uid TEXT PRIMARY KEY,

    schools_identity_uid TEXT NOT NULL
        REFERENCES schools_identity(uid)
        DEFERRABLE INITIALLY DEFERRED,

    fee_type_id INTEGER NOT NULL
        REFERENCES fee_types(id),

    name TEXT NOT NULL,
    is_optional INTEGER NOT NULL DEFAULT 0
    CHECK (is_optional IN (0, 1)),

    version INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    deleted_at TEXT,
    updated_by_device_uid TEXT
) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fees_identity
        ON fees (
            schools_identity_uid,
            fee_type_id,
            name
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fees (
        uid,
        schools_identity_uid,
        fee_type_id,
        name,
        is_optional,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
   VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6,
        ?7, ?8, ?9, ?10
    );
";
