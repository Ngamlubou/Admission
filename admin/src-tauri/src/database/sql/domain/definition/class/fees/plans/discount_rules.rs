pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS discount_rules (
        uid TEXT PRIMARY KEY,

        class_discount_uid TEXT NOT NULL
            REFERENCES class_discounts(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES academic_sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        calc_type TEXT NOT NULL
            CHECK (calc_type IN ('percent', 'fixed')),

        discount_value INTEGER NOT NULL
            CHECK (discount_value >= 0),

        calc_basis TEXT NOT NULL DEFAULT 'gross'
            CHECK (calc_basis IN ('gross', 'remaining')),

        priority INTEGER NOT NULL DEFAULT 100
            CHECK (priority >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (calc_type <> 'percent' OR discount_value <= 10000),
        CHECK (
    calc_type <> 'fixed'
    OR calc_basis = 'gross'
)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_discount_rules_identity
        ON discount_rules (class_discount_uid, session_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO discount_rules (
        uid,
        class_discount_uid,
        session_uid,
        calc_type,
        discount_value,
        calc_basis,
        priority,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6,
        ?7, ?8, ?9, ?10, ?11, ?12
    );
";
