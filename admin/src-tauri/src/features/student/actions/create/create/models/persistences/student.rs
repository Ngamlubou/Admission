pub struct Student {
    pub id: i64,
    pub school_id: i64,
    pub admission_number: String,

    pub first_name: String,
    pub middle_name: Option<String>,
    pub last_name: Option<String>,

   pub date_of_birth: String,

    pub gender: String,
    pub blood_group: String,

    pub social_category: String,
    pub minority_status: String,

    pub disabilities: Vec<Disability>,

    pub aadhaar_number: Option<String>,
    pub pen: Option<String>,

    pub created_at: DateTime<Utc>,
}
