import "../components/Account.css";

export default function Account() {
  return (
    <div className="account">
      <section className="account-section">
        <h2>Email</h2>

        <div className="account-row">
          <div>
            <label>Current Email</label>
            <p>clerk@greenwood.edu</p>
          </div>

          <button type="button">
            Change Email
          </button>
        </div>

        <small>
          Changing your email requires verification through your new email
          address.
        </small>
      </section>

      <section className="account-section">
        <h2>Password</h2>

        <div className="account-row">
          <button type="button">
            Reset Password
          </button>
        </div>

        <small>
          A password reset link will be sent to your registered email.
        </small>
      </section>

      <section className="account-section">
        <h2>Session</h2>

        <div className="account-field">
          <label>Last Sign In</label>
          <p>1 August 2026, 9:15 AM</p>
        </div>
      </section>

      <div className="account-actions">
        <button
          type="button"
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
