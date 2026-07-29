import { useState } from "react";
import "./BillingCollection.css";

export default function BillingCollection() {
    const tuitionDue = [
        ["June 2026", 700],
        ["July 2026", 700],
        ["August 2026", 700],
    ];

    const hostelDue = [
        ["June 2026", 2500],
        ["July 2026", 2500],
        ["August 2026", 2500],
    ];

    const [tuitionCount, setTuitionCount] = useState(1);
    const [hostelCount, setHostelCount] = useState(1);

    const selectedTuition =
        tuitionDue.slice(0, tuitionCount);

    const selectedHostel =
        hostelDue.slice(0, hostelCount);

    const total =
        [...selectedTuition, ...selectedHostel]
            .reduce(
                (sum, item) => sum + item[1],
                0
            );

    return (
        <section className="billing-collection">
            <h2>Fee Collection</h2>

            <h3>Tuition Fees</h3>

            {selectedTuition.map((item) => (
                <div
                    className="collection-row"
                    key={item[0]}
                >
                    <span>{item[0]}</span>

                    <strong>
                        ₹{item[1]}
                    </strong>
                </div>
            ))}

            <div className="collection-controls">
                <button
                    onClick={() =>
                        setTuitionCount(
                            Math.max(
                                0,
                                tuitionCount - 1
                            )
                        )
                    }
                >
                    -
                </button>

                <span>{tuitionCount}</span>

                <button
                    onClick={() =>
                        setTuitionCount(
                            Math.min(
                                tuitionDue.length,
                                tuitionCount + 1
                            )
                        )
                    }
                >
                    +
                </button>
            </div>

            <h3>Hostel Fees</h3>

            {selectedHostel.map((item) => (
    <div className="collection-row" key={item[0]} >
                    <span>{item[0]}</span>

                    <strong>
                        ₹{item[1]}
                    </strong>
                </div>
            ))}

            <div className="collection-controls">
                <button
                    onClick={() =>
  setHostelCount(
                            Math.max( 0, hostelCount - 1 )
                        )
                    }
                >
                    -
                </button>

                <span>{hostelCount}</span>

                <button
                    onClick={() =>
        setHostelCount(
                    Math.min( hostelDue.length,
                                hostelCount + 1 )
                        )
                    }
                >
                    +
                </button>
            </div>

            <hr />

            <div className="collection-total">
                <span>Total Amount</span>
                <strong>₹{total}</strong>
            </div>

            <div className="payment-method">
    <label>Payment Method</label>
<select>
                    <option>Cash</option>
                    <option>UPI</option>
                    <option>Bank Transfer</option>
                    <option>Cheque</option>
                </select>
            </div>

            <button className="collect-button">
                Collect Payment
            </button>
        </section>
    );
}
