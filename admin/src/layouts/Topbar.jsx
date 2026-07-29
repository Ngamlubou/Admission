import { useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar({ workspace }) {
    const navigate = useNavigate();

    const Search = workspace.topbar.search;

    function handleWorkspaceChange(e) {
        const value = e.target.value;

        navigate(value);
    }

    return (
        <header className="topbar">

            <select
                className="workspace-select"
                value={workspace.basePath}
                onChange={handleWorkspaceChange}
            >
                <option value="/students">
                    Student Operations
                </option>

                <option value="/school">
                    School Operations
                </option>
            </select>

            <Search />

        </header>
    );
}
