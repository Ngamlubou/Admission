import { useLayout } from "../../../../layouts/context/LayoutProvider";
import "../components/Options.css";
import classes from "../../../shared/data/Classes";

export default function SearchOptions() {
    const registrationPossible = /^O?H?S?S?\d*$/i;
const registrationReady = /^OHSS\d{5}$/;

const codePossible = /^[A-Z]{0,2}\d{0,3}$/i;
const codeReady = /^[A-Z]{2}\d{3}$/;

const namePossible = /^[A-Za-z ]*$/;
const nameReady = /^[A-Za-z ]{2,}$/;

const penPossible = /^\d{0,14}$/;
const penReady = /^\d{11,14}$/;

const { searchValue } = useLayout();
const value = searchValue.trim();
const suggestions = [];

if (registrationPossible.test(value)) {
    suggestions.push({
        type: "Registration No.",
        value,
        ready: registrationReady.test(value),
    });
}

if (codePossible.test(value)) {
    suggestions.push({
        type: "Code",
        value,
        ready: codeReady.test(value),
    });
}

if (namePossible.test(value)) {
    suggestions.push({
        type: "Student Name",
        value,
        ready: nameReady.test(value),
    });
}

if (penPossible.test(value)) {
    suggestions.push({
        type: "PEN",
        value,
        ready: penReady.test(value),
    });
}

   return (
    <section className="search-options">
        {suggestions.map((item) => (
            <button
                key={item.type}
                className={`search-option ${item.ready ? "active" : ""}`}
                disabled={!item.ready}
            >
                <span>{item.type}</span>
                <span>{item.value}</span>
            </button>
        ))}

        <div className="search-divider" />

        <div className="search-class">
            <label htmlFor="class-select">
                Browse by Class
            </label>

            <select id="class-select" defaultValue="">
                <option value="">Select Class</option>

    {classes.map((item) => (
        <option
            key={item.value}
            value={item.value}
        >
            {item.label}
        </option>
    ))}
</select>
        </div>
    </section>
);
}
