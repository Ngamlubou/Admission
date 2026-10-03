pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS discount_rules (
        uid TEXT PRIMARY KEY,

        discount_uid TEXT NOT NULL
            REFERENCES discounts(uid)
            DEFERRABLE INITIALLY DEFERRED,

        fee_schedule_uid TEXT NOT NULL
            REFERENCES fee_schedules(uid)
            DEFERRABLE INITIALLY DEFERRED,

        calc_type TEXT NOT NULL
            CHECK (calc_type IN ('percent', 'fixed')),

        discount_value INTEGER NOT NULL
            CHECK (discount_value >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (calc_type <> 'percent' OR discount_value <= 10000)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_discount_rules_identity
        ON discount_rules (discount_uid, fee_schedule_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO discount_rules (
        uid,
        discount_uid,
        fee_schedule_uid,
        calc_type,
        discount_value,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5,
        ?6, ?7, ?8, ?9, ?10
    );
";
