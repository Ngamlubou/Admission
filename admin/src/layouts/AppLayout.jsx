import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import students from "../workspaces/students/Layouts";
import school from "../workspaces/school/Layouts";
import "./AppLayout.css";

export default function AppLayout() {
    const location = useLocation();

    const workspace =
        location.pathname.startsWith(school.basePath)
            ? school : students;

    return (
        <div className="app-shell">
            <Sidebar workspace={workspace} />

            <div className="content-area">
                <Topbar workspace={workspace} />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
