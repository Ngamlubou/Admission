import { useState } from "react";

export default function AddressAcademic() {
  const [sameAddress, setSameAddress] = useState(false);
  const [scoreType, setScoreType] = useState("percentage");

  return (
    <section>
      <div className="row">
        <label htmlFor="addressPer">Permanent Address</label>
        <input id="addressPer"  type="text" required />
      </div>

      <div className="row">
        <label htmlFor="pincode">Pincode</label>
        <input  id="pincode"  type="text"   inputMode="numeric"  maxLength={6} required />
      </div>

      <div className="row">
        <label>Current Address</label>
        <div className="fieldGroup"> <label>
          <input  type="checkbox"  checked={sameAddress}  onChange={(e) => setSameAddress(e.target.checked)} />
            Same as Permanent Address </label>
        </div>
      </div>

      <div className="row">
        <label htmlFor="addressCur">Current Address</label>
<input id="addressCur"  type="text"   disabled={sameAddress} list="areaList"  required  />

        <datalist id="areaList">
          <option value="Mantriban, Kanglatongbi" />
          <option value="Namdilong, Kanglatongbi" />
          <option value="Tisperi, Kanglatongbi" />
          <option value="Bazar Board, Kanglatongbi" />
          <option value="Hatikhuwa, Kanglatongbi" />
          <option value="Ply Factory, Kanglatongbi" />
          <option value="Gas Factory, Kanglatongbi" />
          <option value="Shantipur, Kanglatongbi" />
          <option value="Mandir Area, Kanglatongbi" />
          <option value="Makhan Road, Kanglatongbi" />
          <option value="Chundiram, Kanglatongbi" />
          <option value="Makhan Village" />
          <option value="Sak Village" />
          <option value="Awang Sekmai" />
          <option value="Sekmai Bazar" />
        </datalist>
      </div>

      <div className="row">
        <label htmlFor="scoreType">Assessment Type</label>
        <select  id="scoreType"  value={scoreType}   onChange={(e) => setScoreType(e.target.value)} >
          <option value="percentage">Percentage (%)</option>
          <option value="cgpa">CGPA (10 pt scale)</option>
          <option value="grade">Letter Grade</option>
        </select>
      </div>

      {scoreType === "percentage" && (
        <div className="row">
          <label htmlFor="percInput">Percentage</label>
          <input   id="percInput"  type="number" min="10"  max="100"  step="0.01" />
        </div>
      )}

      {scoreType === "cgpa" && (
        <div className="row">
          <label htmlFor="cgpaInput">CGPA</label>
          <input   id="cgpaInput"  type="number"   min="0"  max="10"   step="0.01" />
        </div>
      )}

      {scoreType === "grade" && (
        <div className="row">
          <label htmlFor="gradeInput">Letter Grade</label>
          <input   id="gradeInput"  type="text"  maxLength={2}  />
        </div>
      )}
    </section>
  );
}
