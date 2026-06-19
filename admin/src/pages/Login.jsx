import { useNavigate } from "react-router-dom";

const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea";

export default function Login() {
const navigate = useNavigate();

 async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
  const email = form.get("email");
  const password = form.get("password");
navigate("/dashboard");
}
  return (
    <main>
      <form className="loginCard" onSubmit={handleSubmit}>
        <h1>SmartPea Admin</h1>

        <input name="email"  type="email"    placeholder="Email address"  />
        <input name="password"   type="password"     placeholder="Password"  />

        <button type="submit">   Login In      </button>
      </form>
    </main>
  );
}
