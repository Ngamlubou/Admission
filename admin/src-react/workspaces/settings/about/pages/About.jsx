import "../components/About.css";

export default function About() {
  return (
    <div className="about">
      <section className="about-section">
        <h2>Application</h2>

        <div className="about-field">
          <label>Name</label>
          <span>SmartPea</span>
        </div>

        <div className="about-field">
          <label>Description</label>
          <span>
            A desktop application for managing school
            admissions, student records, and fee
            collection.
          </span>
        </div>

        <div className="about-field">
          <label>Version</label>
          <span>1.0.0</span>
        </div>
      </section>

      <section className="about-section">
        <h2>Support</h2>

        <div className="about-field">
          <label>Email</label>
          <span>support@smartpea.app</span>
        </div>
      </section>

      <section className="about-section">
        <h2>Copyright</h2>

        <div className="about-field">
          <span>
            © 2026 SmartPea
            <br />
            All rights reserved.
          </span>
        </div>
      </section>
    </div>
  );
}
