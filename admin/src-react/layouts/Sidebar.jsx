import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ workspace }) {
    return (
        <aside className="sidebar">
            {workspace.sidebar.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.end}
                >
                    {item.label}
                </NavLink>
            ))}
            <div className="sidebar-bottom">
        <NavLink to="/settings">
            ⚙ Settings
        </NavLink>
    </div>
        </aside>
    );
}
