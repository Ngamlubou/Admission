use crate::database::Database;

pub struct AppState { pub database: Database, }
impl AppState {
    pub fn database(&self) -> &Database { &self.database}
}
