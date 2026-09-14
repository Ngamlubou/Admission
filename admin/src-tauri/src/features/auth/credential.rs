use keyring::Entry;

const SERVICE: &str = "com.smartpea.engine";
const ACCOUNT: &str = "admin-session";

pub fn save_credential(session_id: &str) -> Result<(), keyring::Error> {
    let entry = Entry::new(SERVICE, ACCOUNT)?;
    entry.set_password(session_id)?;
    Ok(())
}

pub fn get_credential() -> Result<Option<String>, keyring::Error> {
    let entry = Entry::new(SERVICE, ACCOUNT)?;

    match entry.get_password() {
        Ok(value) => Ok(Some(value)),
        Err(keyring::Error::NoEntry) => Ok(None),
        Err(error) => Err(error),
    }
}

pub fn delete_credential() -> Result<(), keyring::Error> {
    let entry = Entry::new(SERVICE, ACCOUNT)?;

    match entry.delete_credential() {
        Ok(()) => Ok(()),
        Err(keyring::Error::NoEntry) => Ok(()),
        Err(error) => Err(error),
    }
}
