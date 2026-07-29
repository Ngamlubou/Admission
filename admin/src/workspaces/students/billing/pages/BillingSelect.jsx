import RecentBilling from "../components/RecentBilling";
import { useLayout } from "../../../../layouts/context/LayoutProvider";

export default function BillingSelect() {
    const { focusSearch } = useLayout();

    const selectedStudent = {
        registration: "REG-2026-0045",
        name: "James Bond",
        class: "Class 6",
    };

    return (
        <section className="billing-page">
            <header className="billing-header">
                <h2>Billing</h2>

                <p>
                    Select a student to begin fee collection.
                </p>
            </header>

            <button
                type="button"
               onClick={focusSearch}
            >
                Search Student
            </button>

            {selectedStudent && (
                <section className="selected-student">
                    <h3>Selected Student</h3>

                    <article className="selected-card">
                        <span>
                            {selectedStudent.registration}
                        </span>

                        <span>
                            {selectedStudent.name}
                        </span>

                        <span>
                            {selectedStudent.class}
                        </span>
                    </article>
                </section>
            )}

            <RecentBilling />
        </section>
    );
}
