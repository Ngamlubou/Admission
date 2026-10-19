pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS discount_targets (
        uid TEXT PRIMARY KEY,

        class_discount_uid TEXT NOT NULL
    REFERENCES class_discounts(uid)
    DEFERRABLE INITIALLY DEFERRED,

        fee_installment_uid TEXT NOT NULL
            REFERENCES fee_installments(uid)
            DEFERRABLE INITIALLY DEFERRED,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_discount_targets_identity
        ON discount_targets (
            class_discount_uid,
            fee_installment_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO discount_targets (
        uid,
        class_discount_uid,
        fee_installment_uid,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8
    );
";
