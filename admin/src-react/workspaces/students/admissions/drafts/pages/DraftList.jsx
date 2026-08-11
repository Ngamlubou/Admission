import List from "../../../shared/components/List";

export default function DraftList() {
    const records = [
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

    return (
        <section className="list-page">
            <header className="list-header">
                <h2>Draft Admissions</h2>

                <p>
                    Continue admissions that have not yet been completed.
                </p>
            </header>

           <List records={records} />
        </section>
    );
}
