pub const INSERT: &str = "
    INSERT INTO students (
        id,
        school_id,
        admission_number,
        first_name,
        middle_name,
        last_name,
        date_of_birth,
        gender,
        blood_group,
        social_category,
        minority_status,
        aadhaar_number,
        pen,
        created_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
";
