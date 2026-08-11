import DetailsContent from "../components/DetailsContent";
import DetailsPreview from "../components/DetailsPreview";

import "../components/Details.css";

export default function Details() {
    return (
        <section className="application-details">
            <DetailsContent />

            <DetailsPreview />
        </section>
    );
}
