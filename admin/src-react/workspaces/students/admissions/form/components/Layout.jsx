import { NavLink, Outlet,
    useLocation, useNavigate, } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

   const steps = {
    form: {
        back: null,
        next: "family-contact",
    },
    "family-contact": {
        back: "",
        next: "address-academic",
    },
    "address-academic": {
        back: "family-contact",
        next: "upload-documents",
    },
    "upload-documents": {
        back: "address-academic",
        next: null,
    },
};

const page =
    location.pathname.split("/").at(-1);
const back = steps[page].back;
const next = steps[page].next;

return (
  <>
            <h3>Admission Form</h3>

            <nav className="admission-steps">
                <NavLink to="" end>Personal Details</NavLink>
                <NavLink to="family-contact">Family & Contact</NavLink>
                <NavLink to="address-academic">Address & Academic</NavLink>
                <NavLink to="upload-documents">Upload Documents</NavLink>
            </nav>

            <Outlet />

                <div className="secondary-actions">
                    <button type="button">Save Draft</button>
                    <button type="button">Cancel</button>
                </div>

               <div className="navigation-actions">
                <button
                    type="button"
                    onClick={() => navigate(back)}
                    disabled={back === null}
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={() => navigate(next)}
                    disabled={next === null}
                >
                    Next
                </button>
            </div>
        </>
);
}
