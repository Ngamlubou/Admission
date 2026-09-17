pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS student_addresses (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    address_type TEXT NOT NULL,

    house_number TEXT,
    address TEXT,
    landmark TEXT,
    village TEXT,
    town TEXT,
    city TEXT,
    district TEXT,
    state TEXT,
    pincode TEXT,
    country TEXT,

    PRIMARY KEY (device_id, uid),

    UNIQUE (
        student_device_id,
        student_uid,
        address_type
    ),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid)
);
";
