import "./BillingContent.css";

export default function BillingContent() {
    const billing = {
    student_name: "James Bond",
    registration_no: "OHHS1001",
    class: "Playgroup",
    scholarship: "100% Admission Scholarship",

    total_due: 3900,
    total_paid: 7200,

    tuition_schedule: {
        Admission: 4000,
        "May 2026": 700,
        "June 2026": 700,
    },

    tuition_fees_status: {
        Admission: "paid",
        "May 2026": "paid",
        "June 2026": "due",
    },

    hostel_schedule: {
        Admission: 4000,
        "May 2026": 2500,
        "June 2026": 2500,
    },

    hostel_fees_status: {
        Admission: "paid",
        "May 2026": "paid",
        "June 2026": "due",
    }
};

    const months =
        Object.keys(billing.tuition_schedule);

    return (
        <section className="billing-content">
        <div className="student-summary">
            <h2>{billing.student_name}</h2>

            <p>{billing.class}</p>

            <p>
                Registration No.
                {" "}
                {billing.registration_no}
            </p>

            <br />

            <p>
                Fees to Pay
                {" "}
                <strong>
                    ₹{billing.total_due.toLocaleString("en-IN")}
                </strong>
            </p>

            <p>
                Total Paid
                {" "}
                <strong>
                    ₹{billing.total_paid.toLocaleString("en-IN")}
                </strong>
            </p>

            {billing.scholarship && (
                <>
                    <br />

                    <p>
                        {billing.scholarship}
                    </p>
                </>
            )}
        </div>

<div className="billing-history">
            {months.map((month) => (
                <div
                    className="billing-card"
                    key={month}
                >
                    <h3>{month}</h3>

                    <div className="billing-row">
                        <span>Tuition Fee</span>

                        <strong
                            className={
                                billing.tuition_fees_status[month]
                            }
                        >
                            ₹{billing.tuition_schedule[month]}
                            {" • "}
                            {billing.tuition_fees_status[month]}
                        </strong>
                    </div>

                    {billing.hostel_fees_status?.[month] && (
                        <div className="billing-row">
                            <span>Hostel Fee</span>

                            <strong
                                className={
                                    billing.hostel_fees_status[month]
                                }
                            >
                                ₹{billing.hostel_schedule[month]}
                                {" • "}
                                {billing.hostel_fees_status[month]}
                            </strong>
                        </div>
                    )}
                </div>
            ))}
            </div>
        </section>
    );
}
