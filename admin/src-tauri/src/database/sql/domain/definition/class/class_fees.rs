pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_fees (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,
        fee_uid TEXT NOT NULL,

        amount REAL NOT NULL,

        UNIQUE (class_uid, fee_uid),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid),

        FOREIGN KEY (fee_uid)
            REFERENCES fees(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO class_fees (
        uid,
        class_uid,
        fee_uid,
        amount
    )
    VALUES (?1, ?2, ?3, ?4);
";
