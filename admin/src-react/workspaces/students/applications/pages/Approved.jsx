import { NavLink } from "react-router-dom";
import "../components/index.css";

export default function Approved() {
    return (
        <>
            <NavLink
    to="/students/applications/APP003"
    className="application-row"
>
    <span className="application-type">
        +
    </span>

    <span className="application-name">
        Mr. Alex Johnson
    </span>

    <span className="application-class">
        Class 8
    </span>

    <span className="application-time">
        14m ago
    </span>
</NavLink>

            <div className="empty-state">
            <h3>No approved applications.</h3>

            <p>
                Approved applications will appear here after review.
            </p>
        </div>
        </>
    );
}
