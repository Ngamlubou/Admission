import { Navigate } from "react-router-dom";

import Account from "./account/pages/Account";
import Preferences from "./preferences/pages/Preferences";
import Export from "./export/pages/Export";
import About from "./about/pages/About";

const settingsRoutes = [
  {
    path: "/settings",
    children: [
      {
        index: true,
        element: <Navigate to="account" replace />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "preferences",
        element: <Preferences />,
      },
      {
        path: "export",
        element: <Export />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default settingsRoutes;
