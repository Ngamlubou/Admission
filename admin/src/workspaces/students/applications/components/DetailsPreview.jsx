import { useState } from "react";

import aadhaarImage from "./aadhaar.webp";

import "./DetailsPreview.css";

export default function DetailsPreview() {
    const [selectedDocument, setSelectedDocument] = useState("aadhaar");

    return (
        <section className="details-preview">

            <div className="preview-content">
                <img
                    src={aadhaarImage}
                    alt="Document Preview"
                />
            </div>

            <nav className="document-selector">
                <button
                    type="button"
                    onClick={() => setSelectedDocument("birth")}
                    title="Birth Certificate"
                >
                    📄
                </button>

                <button
                    type="button"
                    onClick={() => setSelectedDocument("aadhaar")}
                    title="Aadhaar Card"
                >
                    🪪
                </button>

                <button
                    type="button"
                    onClick={() => setSelectedDocument("tc")}
                    title="Transfer Certificate"
                >
                    🏫
                </button>

                <button
                    type="button"
                    onClick={() => setSelectedDocument("marksheet")}
                    title="Marksheet"
                >
                    📊
                </button>
            </nav>

        </section>
    );
}
