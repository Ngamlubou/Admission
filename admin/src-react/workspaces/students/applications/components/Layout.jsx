import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <>
 <nav className="application-items">
                <NavLink to="" end>
                    <span className="pending">15</span>
                   Pending
                </NavLink>

                <NavLink to="approved">
                    <span className="approved">50</span>
                   Approved
                </NavLink>

                <NavLink to="hold">
                    <span className="hold">2</span>
                   On Hold
                </NavLink>

                <NavLink to="rejected">
                    <span className="rejected">0</span>
                   Rejected
                </NavLink>
            </nav>
             <Outlet />
        </>
    );
}
