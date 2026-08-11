import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RecentDraft from "../../drafts/components/RecentDraft";
import classes from "../../../../shared/data/Classes";

export default function Setup() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
const [studentType, setStudentType] = useState("new");

const StartAdmission = (event) => {
    event.preventDefault();
    const id = "AB123";
   navigate(`/students/admission/${id}/form`);
};

  return (
    <>
    <form onSubmit={StartAdmission}>
      <h2>New Admission</h2>
      <p>Create a new student admission record.</p>

      <div className="row">
        <label>Academic Session</label>
        <strong>{year}-{String(year + 1).slice(2)}</strong>
      </div>

      <label className="row">
      <span>Class</span>
        <select name="classSelect" required>
          <option value="">Select Class</option>

  <option value="play-group">Play Group</option>
<option value="nursery">Nursery</option>
<option value="lkg">LKG</option>
<option value="ukg">UKG</option>
<option value="class-1">Class 1</option>
<option value="class-2">Class 2</option>
<option value="class-3">Class 3</option>
<option value="class-4">Class 4</option>
<option value="class-5">Class 5</option>
<option value="class-6">Class 6</option>
<option value="class-7">Class 7</option>
<option value="class-8">Class 8</option>
<option value="class-9">Class 9</option>
<option value="class-10">Class 10</option>
<option value="class-11-arts">Class 11 Arts</option>
<option value="class-11-science">Class 11 Science</option>
<option value="class-12-arts">Class 12 Arts</option>
<option value="class-12-science">Class 12 Science</option>
  </select>
     </label>

      <div className="row">
        <label>Student Type</label>
          <label> <input type="radio"  name="studentType" value="new" onChange={() => setStudentType("new")} defaultChecked />
            New Student </label>
          <label> <input type="radio"  name="studentType" value="existing" onChange={() => setStudentType("existing")} />
            Existing Student  </label>
      </div>

      {studentType === "existing" && (
  <> <label className="row">
          <span>Student Name</span>
        <input  name="studentName"  type="text" required/>
      </label>
      <label className="row">
          <span>Mother Name</span>
    <input   name="motherName" type="text" required />
      </label> </>
)}

{studentType === "new" && (
  <><label className="row">
          <span>Aadhaar Number</span>
<input  type="text"  name="aadhaarNo" maxLength="12"  inputMode="numeric" />
      </label>
     <label className="row">
          <span>PEN</span>
<input  type="text"  name="penNo" maxLength="14"  inputMode="numeric" />
      </label> </>
)}

      <div className="actions">
        <button type="submit"> Start Admission  </button>
      </div>
    </form>
    <RecentDraft />
    </>
  );
}
