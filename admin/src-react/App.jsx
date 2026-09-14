import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";

import { createRouter } from "./Router";

export default function Startup() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function checkSession() {
            const result = await invoke("check_session");
            setSession(result);
        }

        checkSession();
    }, []);

    if (session === null) {
        return <div>Loading...</div>;
    }

    if (session === "LoginRequired") {
        window.history.replaceState(
            null,
            "",
            "/Admission/admin/login"
        );
    }

    const router = createRouter();

    return <RouterProvider router={router} />;
}
