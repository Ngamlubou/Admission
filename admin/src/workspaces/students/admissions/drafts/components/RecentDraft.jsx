import { Link } from "react-router-dom";
import List from "../../../shared/components/List";

export default function RecentDraft() {
    const drafts = [
    {
        id: "AB123",
        name: "James Bond",
        primary: "Class 6",
        secondary: "Today, 10:45 AM",
        tertiary: "71% (12 / 17) complete",
    },
    {
        id: "AB124",
        name: "Mary Smith",
        primary: "Nursery",
        secondary: "Yesterday, 4:20 PM",
        tertiary: "35% (6 / 17) complete",
    },
    {
        id: "AB125",
        name: "John Doe",
        primary: "KG-2",
        secondary: "20 Jul 2026, 11:15 AM",
        tertiary: "100% (17 / 17) complete",
    },
];

    const records = drafts.slice(0, 3);

    return (
        <section className="recent-drafts">
            <h3>Recent Draft Admissions</h3>

 <List records={records} />

            {drafts.length > 3 && (
                <div className="recent-footer">
                    <Link to="/students/admission/draftlist">
                        View All Drafts →
                    </Link>
                </div>
            )}
        </section>
    );
}
