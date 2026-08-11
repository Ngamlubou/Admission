import { useRef, useState } from "react";
import "../components/Profile.css";
import defaultLogo from "../components/GPSlogo.webp";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [logo, setLogo] = useState(defaultLogo);
const fileInputRef = useRef(null);

function handleLogoChange(event) {
  const file = event.target.files[0];

  if (!file) return;

  const preview = URL.createObjectURL(file);
  setLogo(preview);

  event.target.value = "";
}

  return (
    <div className="profile">
      <section className="profile-header">
       <div
  className={`profile-logo ${editing ? "editing" : ""}`}
  onClick={() => {
    if (editing) {
      fileInputRef.current?.click();
    }
  }}
>
  <img
    src={logo}
    alt="School Logo"
    className="profile-logo-image"
  />

  {editing && (
    <div className="profile-logo-overlay">
      Change Logo
    </div>
  )}
  <input
  ref={fileInputRef}
  type="file"
  accept="image/*"
  hidden
  onChange={handleLogoChange}
/>
</div>

        <div className="profile-details">
          {editing ? (
            <>
              <input
                type="text"
                defaultValue="Greenwood Public School"
              />

              <input
                type="text"
                defaultValue="Learn • Lead • Serve"
              />

              <input
                type="text"
                defaultValue="GPS"
              />
            </>
          ) : (
            <>
              <h1>Greenwood Public School</h1>

              <p className="profile-motto">
                "Learn • Lead • Serve"
              </p>

              <p className="profile-short-name">
                GPS
              </p>
            </>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2>Contact Information</h2>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Address</label>

            {editing ? (
              <input type="text" defaultValue="123 Main Road" />
            ) : (
              <span>123 Main Road</span>
            )}
          </div>

          <div className="profile-field">
            <label>City</label>

            {editing ? (
              <input type="text" defaultValue="Imphal" />
            ) : (
              <span>Imphal</span>
            )}
          </div>

          <div className="profile-field">
            <label>State</label>

            {editing ? (
              <input type="text" defaultValue="Manipur" />
            ) : (
              <span>Manipur</span>
            )}
          </div>

          <div className="profile-field">
            <label>PIN Code</label>

            {editing ? (
              <input type="text" defaultValue="795001" />
            ) : (
              <span>795001</span>
            )}
          </div>

          <div className="profile-field">
            <label>Phone Number</label>

            {editing ? (
              <input
                type="text"
                defaultValue="+91 9876543210"
              />
            ) : (
              <span>+91 9876543210</span>
            )}
          </div>

          <div className="profile-field">
            <label>Email</label>

            {editing ? (
              <input
                type="email"
                defaultValue="info@greenwood.edu"
              />
            ) : (
              <span>info@greenwood.edu</span>
            )}
          </div>

          <div className="profile-field">
            <label>Website</label>

            {editing ? (
              <input
                type="text"
                defaultValue="www.greenwood.edu"
              />
            ) : (
              <span>www.greenwood.edu</span>
            )}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Official Information</h2>

        <div className="profile-grid">
          <div className="profile-field">
            <label>Affiliation Board</label>

            {editing ? (
              <select defaultValue="CBSE">
                <option>CBSE</option>
                <option>State Board</option>
                <option>ICSE</option>
              </select>
            ) : (
              <span>CBSE</span>
            )}
          </div>

          <div className="profile-field">
            <label>Affiliation Number</label>

            {editing ? (
              <input type="text" defaultValue="1234567" />
            ) : (
              <span>1234567</span>
            )}
          </div>

          <div className="profile-field">
            <label>School Code</label>

            {editing ? (
              <input type="text" defaultValue="SCH001" />
            ) : (
              <span>SCH001</span>
            )}
          </div>

          <div className="profile-field">
            <label>UDISE Code</label>

            {editing ? (
              <input
                type="text"
                defaultValue="12345678901"
              />
            ) : (
              <span>12345678901</span>
            )}
          </div>
        </div>
      </section>

      <div className="profile-actions">
        <button
          type="button"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "View" : "Edit"}
        </button>

        {editing && (
          <button type="button">
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}
