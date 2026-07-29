import List from "../../shared/components/List";

export default function BillingList() {
    const records = [
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
];

    return (
        <section className="list-page">
            <header className="list-header">
                <h2>Billing History</h2>

                <p>
                    Open a recent billing record or continue collecting fees for a student.
                </p>
            </header>

        <List records={records} />
        </section>
    );
}
