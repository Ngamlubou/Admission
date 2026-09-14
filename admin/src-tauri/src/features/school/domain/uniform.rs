pub struct UniformItem {
    pub name: String,
    pub category: String,
    pub gender: String,
    pub quantity: u32,
}

pub struct UniformConfig {
    pub items: Vec<UniformItem>,
}
