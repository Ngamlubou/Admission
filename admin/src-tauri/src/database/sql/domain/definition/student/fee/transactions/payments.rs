pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS payments (
        uid TEXT PRIMARY KEY,

        enrollment_uid TEXT NOT NULL
            REFERENCES enrollments(uid)
            DEFERRABLE INITIALLY DEFERRED,

        receipt_number TEXT NOT NULL,

        amount_minor INTEGER NOT NULL
            CHECK (amount_minor > 0),

        unallocated_amount_minor INTEGER NOT NULL
            CHECK (
                unallocated_amount_minor >= 0
                AND unallocated_amount_minor <= amount_minor
            ),

        payment_date TEXT NOT NULL,

        payment_method TEXT NOT NULL
            CHECK (
                payment_method IN (
                    'cash',
                    'bank_transfer',
                    'upi',
                    'card',
                    'cheque',
                    'other'
                )
            ),

        reference_number TEXT,

        voided_at TEXT,
        void_reason TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK ((voided_at IS NULL) = (void_reason IS NULL))
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_payments_receipt_number
        ON payments (receipt_number)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO payments (
        uid,
        enrollment_uid,
        receipt_number,
        amount_minor,
        unallocated_amount_minor,
        payment_date,
        payment_method,
        reference_number,
        voided_at,
        void_reason,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8,
        ?9, ?10, ?11, ?12, ?13, ?14, ?15
    );
";
