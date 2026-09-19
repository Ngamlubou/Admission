import { RouterProvider } from "react-router-dom";
import { createRouter } from "./Router";

export default function Startup() {
    const router = createRouter();

    return <RouterProvider router={router} />;
}
