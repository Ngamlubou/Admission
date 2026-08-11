import { useState } from "react";
import "./DetailsContent.css";

export default function DetailsContent() {
    const [editing, setEditing] = useState(false);

    return (
        <section className="details-content">

            <header className="application-header">
    <span>Class 5</span>

    <span>APP-00124</span>

    <span>2 min ago</span>

    <button
        type="button"
        className="edit-button"
        onClick={() => setEditing(!editing)} >
        {editing ? "View" : "Edit"}
    </button>
</header>

            <section className="details-section">
                <h3>Personal Details</h3>

                <div className="detail-row">
    <span>Full Name</span>

    {
        editing
            ? <input defaultValue="Mr. John Doe" />
            : <span>Mr. John Doe</span>
    }
</div>

<div className="detail-row">
    <span>Gender</span>

    {
        editing
            ? (
                <select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            )
            : <span>Male</span>
    }
</div>

<div className="detail-row">
    <span>DOB</span>

    {
        editing
            ? <input type="date" defaultValue="2015-01-14" />
            : <span>14 Jan 2015</span>
    }
</div>

<div className="detail-row">
    <span>Blood Group</span>

    {
        editing
            ? (
                <select defaultValue="O+">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                </select>
            )
            : <span>O+</span>
    }
</div>

<div className="detail-row">
    <span>Social Category</span>

    {
        editing
            ? (
                <select defaultValue="OBC">
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>EWS</option>
                </select>
            )
            : <span>OBC</span>
    }
</div>

<div className="detail-row">
    <span>Minority Status</span>

    {
        editing
            ? (
                <select defaultValue="No">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            )
            : <span>No</span>
    }
</div>

<div className="detail-row">
    <span>Disability Status</span>

    {
        editing
            ? (
                <select defaultValue="No">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            )
            : <span>No</span>
    }
</div>

<div className="detail-row">
    <span>Aadhaar Number</span>

    {
        editing
            ? (
                <input
                    type="text"
                    defaultValue="XXXX XXXX 1234"
                />
            )
            : <span>XXXX XXXX 1234</span>
    }
</div>

<div className="detail-row">
    <span>PEN</span>

    {
        editing
            ? (
                <input
                    type="text"
                    defaultValue="12345678901234"
                />
            )
            : <span>12345678901234</span>
    }
</div>
            </section>

            <section className="details-section">
    <h3>Family & Contact Details</h3>

    <div className="detail-row">
        <span>Father Name</span>

        {
            editing
                ? <input defaultValue="Mr. Robert Doe" />
                : <span>Mr. Robert Doe</span>
        }
    </div>

    <div className="detail-row">
        <span>Mother Name</span>

        {
            editing
                ? <input defaultValue="Mrs. Jane Doe" />
                : <span>Mrs. Jane Doe</span>
        }
    </div>

    <div className="detail-row">
        <span>Guardian</span>

        {
            editing
                ? <input defaultValue="-" />
                : <span>-</span>
        }
    </div>

    <div className="detail-row">
        <span>WhatsApp Number</span>

        {
            editing
                ? (
                    <input
                        type="tel"
                        defaultValue="9876543210"
                    />
                )
                : <span>9876543210</span>
        }
    </div>

    <div className="detail-row">
        <span>Alternative Number</span>

        {
            editing
                ? (
                    <input
                        type="tel"
                        defaultValue="9876543211"
                    />
                )
                : <span>9876543211</span>
        }
    </div>
</section>

<section className="details-section">
    <h3>Address & Academic Details</h3>

    <div className="detail-row">
        <span>Permanent Address</span>

        {
            editing
                ? (
                    <textarea
                        defaultValue="Example Village, Example District"
                    />
                )
                : (
                    <span>
                        Example Village, Example District
                    </span>
                )
        }
    </div>

    <div className="detail-row">
        <span>Pincode</span>

        {
            editing
                ? (
                    <input
                        type="text"
                        defaultValue="795001"
                    />
                )
                : <span>795001</span>
        }
    </div>

    <div className="detail-row">
        <span>Current Address</span>

        {
            editing
                ? (
                    <textarea
                        defaultValue="Example Town, Example District"
                    />
                )
                : (
                    <span>
                        Example Town, Example District
                    </span>
                )
        }
    </div>

    <div className="detail-row">
        <span>Percentage</span>

        {
            editing
                ? (
                    <input
                        type="number"
                        defaultValue="85"
                    />
                )
                : <span>85%</span>
        }
    </div>
</section>

        </section>
    );
}
