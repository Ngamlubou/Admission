import { Link } from "react-router-dom";
import List from "../../shared/components/List";

export default function RecentBilling() {
    const billings = [
        {
            id: "REG-2026-0045",
            name: "James Bond",
            primary: "Class 6",
            secondary: "15 Jul 2026, 10:45 AM",
            tertiary: "₹3,500",
        },
        {
            id: "REG-2026-0046",
            name: "Mary Smith",
            primary: "Nursery",
            secondary: "14 Jul 2026, 11:20 AM",
            tertiary: "₹1,800",
        },
        {
            id: "REG-2026-0047",
            name: "John Doe",
            primary: "Class 10",
            secondary: "12 Jul 2026, 2:15 PM",
            tertiary: "₹5,200",
        },
        {
            id: "REG-2026-0048",
            name: "Alice Brown",
            primary: "Class 8",
            secondary: "11 Jul 2026, 9:40 AM",
            tertiary: "₹4,100",
        },
    ];

    const records = billings.slice(0, 3);

    return (
        <section className="recent-billing">
            <h3>Recent Billing</h3>

            <List records={records} />

            {billings.length > 3 && (
                <div className="recent-footer">
                    <Link to="/students/billing/list">
                        View Billing History →
                    </Link>
                </div>
            )}
        </section>
    );
}
