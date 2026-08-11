import "../components/Preferences.css";

export default function Preferences() {
  return (
    <div className="preferences">
      <section className="preferences-section">
        <h2>Security</h2>

        <div className="preference-item">
          <div>
            <h3>App Lock</h3>
            <p>
              Require your application password when
              opening SmartPea.
            </p>
          </div>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>
      </section>

      <section className="preferences-section">
        <h2>Startup</h2>

        <div className="preference-item startup">
          <div>
            <h3>Open on Startup</h3>
            <p>
              Choose which workspace opens when
              SmartPea starts.
            </p>
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="startup"
                defaultChecked
              />
              Restore Last Workspace
            </label>

            <label>
              <input
                type="radio"
                name="startup"
              />
              Student Operations
            </label>

            <label>
              <input
                type="radio"
                name="startup"
              />
              School Operations
            </label>
          </div>
        </div>
      </section>

      <section className="preferences-section">
        <h2>Appearance</h2>

        <div className="preference-item">
          <div>
            <h3>Theme</h3>
            <p>
              Choose how SmartPea looks.
            </p>
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="theme"
                defaultChecked
              />
              System
            </label>

            <label>
              <input
                type="radio"
                name="theme"
              />
              Light
            </label>

            <label>
              <input
                type="radio"
                name="theme"
              />
              Dark
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
