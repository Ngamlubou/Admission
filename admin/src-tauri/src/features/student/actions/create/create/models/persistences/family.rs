pub struct Family {
    pub id: i64,
    pub student_id: i64,
    pub father_full_name: Option<String>,
    pub mother_full_name: String,
    pub guardian_name: Option<String>,
    pub whatsapp_number: String,
    pub alternative_number: Option<String>,
}
