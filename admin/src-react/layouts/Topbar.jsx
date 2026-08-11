import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from "./context/LayoutProvider";

import "./Topbar.css";

export default function Topbar({ workspace }) {
     const navigate = useNavigate();
    const inputRef = useRef();

    const {
    setFocusSearch,
    searchValue,
    setSearchValue,
} = useLayout();

    useEffect(() => {
        setFocusSearch(() => () => {
            inputRef.current?.focus();
        });
    }, []);

   function handleSearchChange(e) {
    const nextValue = e.target.value;

    setSearchValue(nextValue);
}

function handleSearchFocus() {
    if (location.pathname !== `${routes}/search`) {
        navigate(`${routes}/search`);
    }
}

    const routes = workspace.basePath;

    function handleWorkspaceChange(e) {
        navigate(e.target.value);
    }

    return (
        <header className="topbar">

            <select
                className="workspace-select"
                value={routes}
                onChange={handleWorkspaceChange}
            >
                <option value="/students">
                    Student Operations
                </option>

                <option value="/school">
                    School Operations
                </option>

                {routes === "/settings" && (
                    <option value="/settings">
                        Settings
                    </option>
                )}

            </select>

          <input
    ref={inputRef}
    className="search-input"
    type="text"
    placeholder="Search"
    value={searchValue}
    onFocus={handleSearchFocus}
    onChange={handleSearchChange}
/>

        </header>
    );
}
