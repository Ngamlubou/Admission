pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_pricing_amounts (
        uid TEXT PRIMARY KEY,

        fee_pricing_uid TEXT NOT NULL
            REFERENCES fee_pricing(uid)
            DEFERRABLE INITIALLY DEFERRED,

        amount_minor INTEGER NOT NULL
            CHECK (amount_minor >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_pricing_amounts_identity
        ON fee_pricing_amounts (
            fee_pricing_uid,
            amount_minor
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fee_pricing_amounts (
        uid,
        fee_pricing_uid,
        amount_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
