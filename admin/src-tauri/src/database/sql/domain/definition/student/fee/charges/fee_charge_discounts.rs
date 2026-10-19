pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_charge_discounts (
        uid TEXT PRIMARY KEY,

        fee_charge_uid TEXT NOT NULL
            REFERENCES fee_charges(uid)
            DEFERRABLE INITIALLY DEFERRED,

        student_discount_uid TEXT NOT NULL
            REFERENCES student_discounts(uid)
            DEFERRABLE INITIALLY DEFERRED,

        -- Snapshot of the rule used when the charge was generated
        calc_type TEXT NOT NULL
            CHECK (calc_type IN ('percent', 'fixed')),

        rule_value INTEGER NOT NULL
            CHECK (rule_value >= 0),

        calc_basis TEXT NOT NULL
            CHECK (calc_basis IN ('gross', 'remaining')),

        priority INTEGER NOT NULL
            CHECK (priority >= 0),

        -- Actual amount deducted, in minor currency units
        amount_minor INTEGER NOT NULL
            CHECK (amount_minor >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (
            calc_type <> 'percent'
            OR rule_value <= 10000
        ),
        CHECK (
    calc_type <> 'fixed'
    OR calc_basis = 'gross'
)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_charge_discounts_identity
        ON fee_charge_discounts (
            fee_charge_uid,
            student_discount_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fee_charge_discounts (
        uid,
        fee_charge_uid,
        student_discount_uid,
        calc_type,
        rule_value,
        calc_basis,
        priority,
        amount_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6, ?7,
        ?8, ?9, ?10, ?11, ?12, ?13
    )
    ON CONFLICT (
        fee_charge_uid,
        student_discount_uid
    )
    WHERE deleted_at IS NULL
    DO NOTHING;
";
