pub const CREATE_TABLE: &str = "
CREATE TABLE IF NOT EXISTS family_parents (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    family_device_id TEXT NOT NULL,
    family_uid TEXT NOT NULL,

    relationship TEXT NOT NULL,

    first_name TEXT NOT NULL,
    middle_name TEXT,
    last_name TEXT,
    whatsapp_number TEXT,
    alternative_number TEXT,
    profession TEXT,
    is_alive INTEGER NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (family_device_id, family_uid)
        REFERENCES families(device_id, uid)
);
";
