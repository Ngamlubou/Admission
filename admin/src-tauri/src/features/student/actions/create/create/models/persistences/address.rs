pub struct Address {
    pub id: i64,
    pub student_id: i64,

    pub permanent_address: String,
    pub permanent_pincode: String,

    pub current_address: Option<String>,
    pub current_pincode: Option<String>,
}
