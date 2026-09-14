use reqwest::Client;
use serde::Serialize;
use super::credential::{save_credential, get_credential};

const BASE_URL: &str = "http://localhost:9000/smart-pea";

#[derive(Serialize)]
struct LoginRequest {
    email: String,
    password: String,
}

#[tauri::command]
pub async fn login(
    email: String, password: String,
) -> Result<(), String> {

    let client = Client::new();

    let response = client
        .post(format!("{BASE_URL}/login"))
        .json(&LoginRequest {
            email,
            password,
        })
        .send()
        .await
        .map_err(|err| err.to_string())?;

    if !response.status().is_success() {
        return Err("Login failed".to_string());
    }

    let session_id = response
        .cookies()
        .find(|cookie| cookie.name() == "adminSession")
        .ok_or("Session cookie not received")
        .map_err(|err| err.to_string())?
        .value()
        .to_string();

    save_credential(&session_id)
        .map_err(|err| err.to_string())?;

    Ok(())
}

#[tauri::command]
pub fn check_session() -> Result<SessionState, String> {
    let credential = get_credential()
        .map_err(|err| err.to_string())?;

    match credential {
        Some(_) => Ok(SessionState::Authenticated),
        None => Ok(SessionState::LoginRequired),
    }
}
