use tauri::State;
use crate::state::AppState;
use crate::database::repositories::student;
use crate::models::Student;

#[tauri::command]
pub fn get_by_code( state: State<AppState>, code: String, )
-> Result<Option<Student>, String>{
    let connection = state.database().connection();
    student::get_by_code(&connection, &code)
    .map_err(|error| error.to_string())
}

#[tauri::command]
pub fn get_all( state: State<AppState>,)
-> Result<Vec<Student>, String>{
    let connection = state.database().connection();
    student::get_all(&connection)
    .map_err(|error| error.to_string())
}
#[tauri::command]
pub fn create( state: State<AppState>, student: Student,)
-> Result<(), String> {
    let connection = state.database().connection();
    student::create(&connection, &student)
    .map_err(|error| error.to_string())
}
#[tauri::command]
pub fn update(  state: State<AppState>, student: Student,)
-> Result<(), String> {
    let connection = state.database().connection();
    student::update(&connection, &student)
        .map_err(|error| error.to_string())
}
#[tauri::command]
pub fn delete( state: State<AppState>, code: String,)
-> Result<(), String> {
    let connection = state.database().connection();
    student::delete(&connection, &code)
        .map_err(|error| error.to_string())
}
