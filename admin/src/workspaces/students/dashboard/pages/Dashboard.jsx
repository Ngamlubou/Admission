import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Dashboard() {
  const navigate = useNavigate();
const [message, setMessage] = useState("");
const [students, setStudents] = useState([]);

async function handleCreateStudents() {
  const student = {
    code: "ST001",
    registration_no: "REG001",
    student_name: "Tony Stark",
    standard: "Class 10",
    father_name: "Howard Stark",
    mother_name: "Maria Stark",
    whatsapp_no: "9876543210",
    alternate_no: null,
    gender: "Male",
    dob: "2008-01-01",

    sync_status: "pending",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  };

  try {
    await createStudent(student);

    setMessage("Student created successfully.");
  } catch (error) {
    setMessage(`Create failed: ${error}`);
  }
}

async function handleGetStudents() {
  try {
    const result = await getAllStudents();

    setStudents(result);
    setMessage(`Loaded ${result.length} students.`);
  } catch (error) {
    setMessage(`Load failed: ${error}`);
  }
}

  return (
    <main className="container">
      <h1>SmartPea Admin</h1>

      <button onClick={() => navigate("/admission/new")}>
        New Admission
      </button>
       <button onClick={() => navigate("/admission/:id/form")}>
        New Admission form
      </button>

     <button onClick={handleCreateStudents}>
  Create Test Student
</button>

<button onClick={handleGetStudents}>
  Get All Students
</button>
<p>{message}</p>

{students.map((student) => (
  <div key={student.code}>
    <strong>{student.student_name}</strong>
    <br />
    Code: {student.code}
    <br />
    Registration: {student.registration_no}
    <br />
    Standard: {student.standard}
    <hr />
  </div>
))}
    </main>
  );
}
