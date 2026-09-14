import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";

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
            await invoke("login", {
                email,
                password,
            });

            navigate("/");
        } catch (err) {
            alert(err || "Login failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <form className="container" onSubmit={handleSubmit}>
                <h1>SmartPea Admin</h1>

                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Log In"}
                </button>
            </form>
        </main>
    );
}
