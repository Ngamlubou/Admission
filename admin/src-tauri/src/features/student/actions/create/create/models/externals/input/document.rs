pub struct Document {
    pub document_type: DocumentType,
    pub name: String,
    pub file: Vec<u8>,
    pub file2: Option<Vec<u8>>,
}

pub enum DocumentType {
    BirthCertificate,
    Aadhaar,
    ProfilePhoto,
    ProgressReport,
    TransferCertificate,
    IncomeCertificate,
    DomicileCertificate,
    CasteCertificate,
    AchievementCertificate,
    MigrationCertificate,
    ProvisionalCertificate,
    DisabilityCertificate,
    CharacterCertificate,
    Custom,
}
