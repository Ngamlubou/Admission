use reqwest::Client;
use serde::Serialize;
use super::credential::save_credential;

const BASE_URL: &str =
    "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea-a";

#[derive(Serialize)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

pub struct AuthClient {
    client: Client,
}

impl AuthClient {
    pub fn new() -> Result<Self, reqwest::Error> {
        let client = Client::builder()
            .cookie_store(true)
            .build()?;

        Ok(Self { client })
    }

   pub async fn login(
    email: String,
    password: String,
) -> Result<(), Box<dyn std::error::Error>> {

    let response = self.client
        .post(format!("{BASE_URL}/login"))
        .json(&LoginRequest {
            email,
            password,
        })
        .send()
        .await?;

    if !response.status().is_success() {
        return Err("Login failed".into());
    }

    let session_id = response
    .cookies()
    .find(|cookie| cookie.name() == "adminSession")
    .ok_or("Session cookie not received")?
    .value()
    .to_string();

save_credential(&session_id)?;

Ok(())
}
