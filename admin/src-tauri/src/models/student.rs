#[derive( Clone, serde::Serialize, serde::Deserialize)]
pub struct Student {
    pub code: String,
    pub registration_no: Option<String>,

    pub student_name: String,

    pub standard: Option<String>,

    pub father_name: Option<String>,
    pub mother_name: Option<String>,

    pub whatsapp_no: Option<String>,
    pub alternate_no: Option<String>,
    pub gender: Option<String>,

    pub dob: Option<String>,

    pub sync_status: String,

    pub created_at: String,
    pub updated_at: String,
}
