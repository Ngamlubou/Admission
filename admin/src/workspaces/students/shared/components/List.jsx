import "../styles/List.css";

export default function List({ records }) {
    return (
        <section className="list">
            {records.map((record) => (
                <article
                    key={record.id}
                    className="list-item"
                >
                    <div className="list-id">
                        {record.id}
                    </div>

                    <div className="list-info">
                        <strong>{record.name}</strong>
                        <span>{record.secondary}</span>
                    </div>

                    <div className="list-status">
                        <strong>{record.primary}</strong>
                        <span>{record.tertiary}</span>
                    </div>
                </article>
            ))}
        </section>
    );
}
