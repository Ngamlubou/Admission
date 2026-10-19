pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS payment_allocations (
        uid TEXT PRIMARY KEY,

        payment_uid TEXT NOT NULL
            REFERENCES payments(uid)
            DEFERRABLE INITIALLY DEFERRED,

        fee_charge_uid TEXT NOT NULL
            REFERENCES fee_charges(uid)
            DEFERRABLE INITIALLY DEFERRED,

        amount_minor INTEGER NOT NULL
            CHECK (amount_minor > 0),

        voided_at TEXT,
        void_reason TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK ((voided_at IS NULL) = (void_reason IS NULL))
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_payment_allocations_identity
        ON payment_allocations (
            payment_uid,
            fee_charge_uid
        )
        WHERE voided_at IS NULL AND deleted_at IS NULL;

    CREATE INDEX IF NOT EXISTS ix_payment_allocations_fee_charge
    ON payment_allocations (fee_charge_uid)
    WHERE voided_at IS NULL AND deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO payment_allocations (
        uid,
        payment_uid,
        fee_charge_uid,
        amount_minor,
        voided_at,
        void_reason,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6,
        ?7, ?8, ?9, ?10, ?11
    );
";
