import "../components/index.css";

export default function Documents({ formData, setFormData }) {
  return (
    <section>
      <div className="row">
        <label htmlFor="marksheetFile">Marksheet</label>
        <input    id="marksheetFile"   type="file"  accept="image/*,.pdf" />
      </div>

      <div className="row">
        <label htmlFor="profileFile">Profile Photo</label>
        <input  id="profileFile"  type="file"  accept="image/*" />
      </div>

      <div className="row">
        <label htmlFor="tcFile">Transfer Certificate</label>
        <input  id="tcFile" type="file" accept="image/*,.pdf"  />
      </div>

      <div className="row">
        <label htmlFor="identityType">Identity Document</label>
        <div>
          <select id="identityType">
            <option value="aadhaar">Student Aadhaar</option>
            <option value="birth">Birth Certificate</option>
          </select>
          <input type="file"  accept="image/*,.pdf"  />
        </div>
      </div>
    </section>
  );
}
