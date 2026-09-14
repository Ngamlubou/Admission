use crate::database::Database;
use crate::auth::session::{check_session, SessionState};

pub struct AppState {
    pub database: Database,
}

impl AppState {
    pub fn database(&self) -> &Database { &self.database}
}
