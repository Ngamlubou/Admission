pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS payment_refunds (
        uid TEXT PRIMARY KEY,

        payment_uid TEXT NOT NULL
            REFERENCES payments(uid)
            DEFERRABLE INITIALLY DEFERRED,

        amount_minor INTEGER NOT NULL
            CHECK (amount_minor > 0),

        refund_date TEXT NOT NULL,

        refund_method TEXT NOT NULL
            CHECK (
                refund_method IN (
                    'cash',
                    'bank_transfer',
                    'upi',
                    'card',
                    'cheque',
                    'other'
                )
            ),

        reference_number TEXT,

        reason TEXT NOT NULL,

        voided_at TEXT,
        void_reason TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK ((voided_at IS NULL) = (void_reason IS NULL))
    ) STRICT;

    CREATE INDEX IF NOT EXISTS ix_payment_refunds_payment
        ON payment_refunds (payment_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO payment_refunds (
        uid,
        payment_uid,
        amount_minor,
        refund_date,
        refund_method,
        reference_number,
        reason,
        voided_at,
        void_reason,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6, ?7,
        ?8, ?9, ?10, ?11, ?12, ?13, ?14
    );
";
