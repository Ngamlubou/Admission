pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_charges (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        fee_installment_uid TEXT NOT NULL
            REFERENCES fee_installments(uid)
            DEFERRABLE INITIALLY DEFERRED,

        gross_amount_minor INTEGER NOT NULL,
        discount_minor INTEGER NOT NULL DEFAULT 0,
        net_amount_minor INTEGER NOT NULL,

        voided_at TEXT,
        void_reason TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (gross_amount_minor >= 0),
        CHECK (discount_minor >= 0 AND discount_minor <= gross_amount_minor),
        CHECK (net_amount_minor = gross_amount_minor - discount_minor),
        CHECK ((voided_at IS NULL) = (void_reason IS NULL))
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_charges_identity
        ON fee_charges (student_uid, fee_installment_uid);

    CREATE INDEX IF NOT EXISTS ix_fee_charges_installment
        ON fee_charges (fee_installment_uid);
";

pub const INSERT: &str = "
    INSERT INTO fee_charges (
        uid,
        student_uid,
        fee_installment_uid,
        gross_amount_minor,
        discount_minor,
        net_amount_minor,
        version,
        created_at,
        updated_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)
    ON CONFLICT (student_uid, fee_installment_uid) DO NOTHING;
";
