pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniform_sizes (
        uid TEXT PRIMARY KEY,

        uniform_uid TEXT NOT NULL,

        size TEXT NOT NULL,
        price REAL,

        UNIQUE (uniform_uid, size),

        FOREIGN KEY (uniform_uid)
            REFERENCES uniforms(uid)
    );
";
