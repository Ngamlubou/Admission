pub struct Address {
    pub permanent: Option<AddressDetails>,
    pub current: Option<AddressDetails>,
}

pub struct AddressDetails {
    pub house_number: Option<String>,
    pub address_line: Option<String>,
    pub landmark: Option<String>,
    pub village: Option<String>,
    pub town: Option<String>,
    pub city: Option<String>,
    pub district: Option<String>,
    pub state: Option<String>,
    pub pincode: Option<String>,
    pub country: Option<String>,
}
