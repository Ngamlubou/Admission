pub struct Document {
    pub id: i64,
    pub student_id: i64,
    pub document_type: String,
    pub file_reference: String,
    pub uploaded_at: DateTime<Utc>,
}
