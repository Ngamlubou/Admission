import { createBrowserRouter } from "react-router-dom";

import Login from "./auth/Login";

import studentRoutes from "./workspaces/students/Routes";
import schoolRoutes from "./workspaces/school/Routes";

import { LayoutProvider } from "./layouts/context/LayoutProvider";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter(  [
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
            ],
        },
    ],
    {
        basename: "/Admission/admin",
    }
);

export default router;
