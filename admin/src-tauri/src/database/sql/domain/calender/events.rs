pub const CREATE_TABLE: &str = "
CREATE TABLE IF NOT EXISTS events (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    schools_identity_uid TEXT NOT NULL,

    date TEXT NOT NULL,
    name TEXT NOT NULL,
    event_type_id INTEGER NOT NULL,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (schools_identity_uid)
        REFERENCES schools_identity(uid),

    FOREIGN KEY (event_type_id)
        REFERENCES event_types(id)
);
";

pub const INSERT: &str = "
    INSERT INTO events (
        device_id,
        uid,
        schools_identity_uid,
        date,
        name,
        event_type_id
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6);
";
