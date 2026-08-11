import navigation from "../data/Navigation";
import { useLayout } from "../../../../layouts/context/LayoutProvider";
import "../components/Results.css";

export default function Results() {
    const { searchValue } = useLayout();

    const query = searchValue.trim().toLowerCase();

    if (!query) {
        return (
            <p>Search School Operations.</p>
        );
    }

   const results = [];

for (const section of navigation) {
    const pages = [];

    for (const page of section.pages) {
        const labelMatch = page.label
            .toLowerCase()
            .includes(query);

        const matchedKeyword = page.keywords?.find(
            keyword =>
                keyword
                    .toLowerCase()
                    .includes(query)
        );

        if (!labelMatch && !matchedKeyword) {
            continue;
        }

        pages.push({
            ...page,
            path: page.path
                ? `${section.path}/${page.path}`
                : section.path,

            matchType: labelMatch
                ? "label"
                : "keyword",

            matchedKeyword,
        });
    }

    pages.sort((a, b) => {
        if (a.matchType === b.matchType) {
            return 0;
        }

        return a.matchType === "label"
            ? -1
            : 1;
    });

    if (pages.length > 0) {
        results.push({
            category: section.category,
            pages,
        });
    }
}

    return (
    <section className="results">
    {results.map((section) => (
        <section
            key={section.category}
            className="result-section"
        >
            <h3>{section.category}</h3>

            <div className="result-list">
                {section.pages.map((page) => (
                    <button
                        key={page.path}
                        className="result-item"
                    >
                        <div className="result-label">
                            {page.label}

                            {page.matchedKeyword && (
                                <>
                                    {" "}
                                    ·{" "}
                                    <span className="result-keyword">
                                        {page.matchedKeyword}
                                    </span>
                                </>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </section>
    ))}
</section>
);
}
