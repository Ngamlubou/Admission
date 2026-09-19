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

pub const INSERT: &str = "
    INSERT INTO family_parents (
        device_id,
        uid,
        family_device_id,
        family_uid,
        relationship,
        first_name,
        middle_name,
        last_name,
        whatsapp_number,
        alternative_number,
        profession,
        is_alive
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6,
        ?7, ?8, ?9, ?10, ?11, ?12
    );
";
