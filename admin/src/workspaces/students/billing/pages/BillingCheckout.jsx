import BillingContent from "../components/BillingContent";
import BillingCollection from "../components/BillingCollection";

import "../components/Billing.css";

export default function Billing() {
    return (
        <section className="billing-page">
            <BillingContent />

            <BillingCollection />
        </section>
    );
}
