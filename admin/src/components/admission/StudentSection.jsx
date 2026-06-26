import { useState } from "react";

export default function StudentSection() {
const [hasDisability, setHasDisability] = useState(false);

  return (
    <section>
      <div className="row">
        <label htmlFor="studentName">Student Name</label>
        <input  id="studentName"  type="text" required/>
      </div>

      <div className="row">
        <label>Gender</label>
         <label>
            <input type="radio" name="gender" value="Male" />   Male   </label>
          <label>
            <input type="radio" name="gender" value="Female" />   Female   </label>
      </div>

      <div className="row">
        <label htmlFor="dob">Date of Birth</label>
        <input id="dob" type="date" min="2004-01-01" />
      </div>

      <div className="row">
        <label htmlFor="bloodGroup">Blood Group</label>
        <select id="bloodGroup" required>
  <option value="1">Unknown</option>
  <option value="2">A+</option>
  <option value="3">A-</option>
  <option value="4">B+</option>
  <option value="5">B-</option>
  <option value="6">O+</option>
  <option value="7">O-</option>
  <option value="8">AB+</option>
  <option value="9">AB-</option>
</select>
      </div>

      <div className="row">
       <label htmlFor="socialCategory">Social Category</label>
<select id="socialCategory" required>
  <option value="1">General</option>
  <option value="2">SC</option>
  <option value="3">ST</option>
  <option value="4">OBC</option>
</select>
      </div>

      <div className="row">
        <label htmlFor="minorityStatus">Minority Status</label>
<select id="minorityStatus" required>
<option value="7">None / Not Applicable</option>
  <option value="1">Muslim</option>
  <option value="2">Sikh</option>
  <option value="3">Jain</option>
  <option value="4">Christian</option>
  <option value="5">Parsi</option>
  <option value="6">Buddhist</option>
</select>
      </div>

      <div className="row">
<label>Disability (CWSN)</label>
<label>
<input type="radio" name="cwsn" value="" onChange={() => setHasDisability(true)} />   Yes
</label>
<label>
<input type="radio" name="cwsn" value="2" onChange={() => setHasDisability(false)} />   No
</label>

{hasDisability && (
<select id="disabilityType" required>
  <option value="">Select Disability Type</option>
  <option value="1">Blindness</option>
  <option value="2">Low-vision</option>
  <option value="3">Leprosy Cured persons</option>
  <option value="4">Hearing Impairment</option>
  <option value="5">Locomotor Disability</option>
  <option value="6">Dwarfism</option>
  <option value="7">Intellectual Disability</option>
  <option value="8">Mental Illness</option>
  <option value="9">Autism Spectrum Disorder</option>
  <option value="10">Cerebral Palsy</option>
  <option value="11">Muscular Dystrophy</option>
  <option value="12">Chronic Neurological conditions</option>
  <option value="13">Specific Learning Disabilities</option>
  <option value="14">Multiple Sclerosis</option>
  <option value="15">Speech and Language disability</option>
  <option value="16">Thalassemia</option>
  <option value="17">Hemophilia</option>
  <option value="18">Sickle Cell disease</option>
  <option value="19">Multiple Disabilities (including Deaf-Blindness)</option>
  <option value="20">Acid Attack victims</option>
  <option value="21">Parkinson's disease</option>
</select> )}
      </div>

      <div className="row" id="aadhaarNoArea">
  <label htmlFor="aadhaarNo">Aadhaar Number</label>
<input  type="text"  id="aadhaarNo" maxLength="12"  inputMode="numeric" required/>
      </div>

      <div className="row" id="penArea">
<label htmlFor="penNo">PEN</label>
<input  type="text"  id="penNo" maxLength="14"  inputMode="numeric" required/>
      </div>
    </section>
  );
}
