import { NavLink } from "react-router-dom";
import "../components/index.css";

export default function Hold() {
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

            <div className="application-row">
                <span className="application-type">
                    ↺
                </span>

                <span className="application-name">
                    Miss Mary Smith
                </span>

                <span className="application-class">
                    Nursery
                </span>

                <span className="application-time">
                    8m ago
                </span>
            </div>

            <div className="application-row">
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
            </div>

             <div className="empty-state">
            <h3>No applications on hold.</h3>

            <p>
                Applications requiring follow-up will appear here.
            </p>
        </div>
        </>
    );
}
