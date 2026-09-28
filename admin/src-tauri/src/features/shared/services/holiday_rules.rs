use chrono::{Datelike, NaiveDate, Weekday};

#[derive(Debug, Clone, Copy)]
pub enum WeekPosition {
    First,
    Second,
    Third,
    Fourth,
    Fifth,
}

pub fn fixed_date(
    year: i32,
    month: u32,
    day: u32,
) -> Option<NaiveDate> {
    NaiveDate::from_ymd_opt(year, month, day)
}

pub fn nth_weekday(
    year: i32,
    month: u32,
    weekday: Weekday,
    position: WeekPosition,
) -> Option<NaiveDate> {
    let first_day = NaiveDate::from_ymd_opt(year, month, 1)?;

    let first_weekday = first_day.weekday();

    let days_until_weekday =
        (weekday.num_days_from_monday() as i32
            - first_weekday.num_days_from_monday() as i32)
            .rem_euclid(7);

    let position_number = match position {
        WeekPosition::First => 1,
        WeekPosition::Second => 2,
        WeekPosition::Third => 3,
        WeekPosition::Fourth => 4,
        WeekPosition::Fifth => 5,
    };

    let day = 1
        + days_until_weekday as u32
        + 7 * (position_number - 1);

    NaiveDate::from_ymd_opt(year, month, day)
}

pub fn easter_sunday(year: i32) -> Option<NaiveDate> {
    let a = year % 19;
    let b = year / 100;
    let c = year % 100;
    let d = b / 4;
    let e = b % 4;
    let f = (b + 8) / 25;
    let g = (b - f + 1) / 3;
    let h = (19 * a + b - d - g + 15) % 30;
    let i = c / 4;
    let k = c % 4;
    let l = (32 + 2 * e + 2 * i - h - k) % 7;
    let m = (a + 11 * h + 22 * l) / 451;

    let month = (h + l - 7 * m + 114) / 31;
    let day = ((h + l - 7 * m + 114) % 31) + 1;

    NaiveDate::from_ymd_opt(
        year,
        month as u32,
        day as u32,
    )
}
