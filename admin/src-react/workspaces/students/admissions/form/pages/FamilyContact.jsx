import "../components/index.css";

export default function FamilyContact({ formData, setFormData }) {
  return (
    <section>
      <div className="row">
    <label htmlFor="fatherName">Father Name</label>
        <input  id="fatherName"   type="text"   required  />
      </div>

      <div className="row">
        <label htmlFor="motherName">Mother Name</label>
    <input   id="motherName" type="text" required />
      </div>

      <div className="row">
 <label htmlFor="guardianName">Guardian Name</label>
        <input   id="guardianName"  type="text" />
      </div>

      <div className="row">
 <label htmlFor="contactNo">WhatsApp Number</label>
<input id="contactNo"  type="text"  inputMode="numeric" maxLength={10}  required />
      </div>

      <div className="row">
<label htmlFor="contactRelate">Number Belongs To</label>
        <select  id="contactRelate" required >
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Sibling">Sibling</option>
          <option value="Guardian">Guardian</option>
        </select>
      </div>

      <div className="row">
    <label htmlFor="alternateNo">Alternative Number</label>
        <input id="alternateNo"  type="text" inputMode="numeric" maxLength={10}  />
      </div>
    </section>
  );
}
