pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS sync_record_versions (
    entity TEXT NOT NULL,
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,
    server_version INTEGER NOT NULL,

    PRIMARY KEY (entity, device_id, uid)
);
";