pub struct Family {
    pub father: Option<Parent>,
    pub mother: Option<Parent>,
    pub guardian: Option<Parent>,
     pub family_status: Option<FamilyStatus>,
}

pub struct Parent {
    pub full_name: String,
    pub whatsapp_number: Option<String>,
    pub alternative_number: Option<String>,
    pub profession: Option<String>,
    pub is_alive: bool,
}

pub enum FamilyStatus {
    BothParents,
    SingleParent,
    Guardian,
}
