pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_transactions (
        device_id TEXT NOT NULL,
        uid TEXT NOT NULL,

        student_fee_charge_device_id TEXT NOT NULL,
        student_fee_charge_uid TEXT NOT NULL,

        amount REAL NOT NULL,
        transaction_date TEXT NOT NULL,
        payment_method TEXT NOT NULL,

        PRIMARY KEY (device_id, uid),

        FOREIGN KEY (student_fee_charge_device_id, student_fee_charge_uid)
            REFERENCES student_fee_charges(device_id, uid)
    );
";
