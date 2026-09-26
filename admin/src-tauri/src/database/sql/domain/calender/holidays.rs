pub const CREATE_TABLE: &str = "
CREATE TABLE IF NOT EXISTS holidays (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    schools_identity_uid TEXT NOT NULL,

    date TEXT NOT NULL,
    name TEXT NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (schools_identity_uid)
        REFERENCES schools_identity(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO holidays (
        device_id,
        uid,
        schools_identity_uid,
        date,
        name
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
