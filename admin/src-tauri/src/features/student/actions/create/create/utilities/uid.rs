use rand::Rng;

pub fn uid() -> String {
    const CHARACTERS: &[u8] =
        b"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let mut rng = rand::rng();

    (0..10)
        .map(|_| {
            let index = rng.random_range(0..CHARACTERS.len());
            CHARACTERS[index] as char
        })
        .collect()
}
