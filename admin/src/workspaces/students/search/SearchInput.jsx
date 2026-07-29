import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLayout } from "../../../layouts/context/LayoutProvider";

export default function StudentSearch() {
    const navigate = useNavigate();
    const inputRef = useRef();

    const { setFocusSearch } = useLayout();

    useEffect(() => {
        setFocusSearch(() => () => {
            inputRef.current?.focus();
        });
    }, []);

    function handleChange(e) {
        const nextValue = e.target.value.toUpperCase();

        navigate(
            `/students/search?q=${encodeURIComponent(nextValue)}`
        );
    }

    return (
        <input
            ref={inputRef}
            className="student-search"
            type="text"
            placeholder="Search student..."
            onFocus={() => navigate("/students/search")}
            onChange={handleChange}
        />
    );
}
