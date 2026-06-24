import { useNavigate } from "react-router-dom";
import { useState } from "react";

const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea-a";

export default function Login() {
const navigate = useNavigate();
const [loading, setLoading] = useState(false);

 async function handleSubmit(event) {
 event.preventDefault();
 setLoading(true);
    const form = new FormData(event.target);
  const email = form.get("email");
  const password = form.get("password");
   try {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const result = await res.json();
if (!res.ok) {   alert(result); return;   }

 setLoading(false);
navigate("/dashboard");
} catch (err) {
    alert(err.message || "Failed to load student details");  }
}
  return (
    <main>
      <form className="container" onSubmit={handleSubmit}>
        <h1>SmartPea Admin</h1>

        <input name="email"  type="email"    placeholder="Email address"  />
        <input name="password"   type="password"     placeholder="Password"  />

        <button type="submit" disabled={loading}> {loading ? "Signing in..." : "Log In"}</button>
      </form>
    </main>
  );
}
