import { createBrowserRouter } from "react-router-dom";

import Login from "./auth/Login";

import studentRoutes from "./workspaces/students/Routes";
import schoolRoutes from "./workspaces/school/Routes";
import SettingRoutes from "./workspaces/settings/Routes";

import { LayoutProvider } from "./layouts/context/LayoutProvider";
import AppLayout from "./layouts/AppLayout";

export function createRouter() {
    return createBrowserRouter(
        [
            {
                path: "/login",
                element: <Login />,
            },

            {
                element: (
                    <LayoutProvider>
                        <AppLayout />
                    </LayoutProvider>
                ),
                children: [
                    ...studentRoutes,
                    ...schoolRoutes,
                    ...SettingRoutes,
                ],
            },
        ],
        {
            basename: "/Admission/admin",
        }
    );
}
