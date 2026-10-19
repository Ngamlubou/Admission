pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_pricing (
        uid TEXT PRIMARY KEY,

        fee_schedule_uid TEXT NOT NULL
            REFERENCES fee_schedules(uid)
            DEFERRABLE INITIALLY DEFERRED,

        pricing_mode TEXT NOT NULL
            CHECK (pricing_mode IN ('groups', 'range')),

        minimum_amount_minor INTEGER NOT NULL
            CHECK (minimum_amount_minor >= 0),

        maximum_amount_minor INTEGER NOT NULL
            CHECK (maximum_amount_minor > minimum_amount_minor),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_pricing_identity
        ON fee_pricing (fee_schedule_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fee_pricing (
        uid,
        fee_schedule_uid,
        pricing_mode,
        minimum_amount_minor,
        maximum_amount_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10);
";
