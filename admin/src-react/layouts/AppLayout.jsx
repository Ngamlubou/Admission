import { Outlet, useLocation } from "react-router-dom";

import "./AppLayout.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import students from "../workspaces/students/Layouts";
import school from "../workspaces/school/Layouts";
import settings from "../workspaces/settings/Layouts";


export default function AppLayout() {
    const location = useLocation();

    const workspaceName = location.pathname.split("/")[1];
    const workspaces = {
  students,
  school,
  settings,
};

const workspace = workspaces[workspaceName] || students;

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
