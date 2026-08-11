import { useParams } from "react-router-dom";
import Table from "../../../shared/components/Table";

export default function CategoryView() {
  const { category } = useParams();

  const tableColumns = {
    "personal-details": [
       "Full Name",
          "Gender",
          "DOB",
          "Blood Group",
          "Social Category",
          "Minority",
          "CWSN",
          "Aadhaar",
          "PEN",
    ],
    "family-contact": [
      "Father Full Name",
        "Mother Full Name",
        "Guardian",
        "WhatsApp Number",
        "Alternative Number",
    ],
     "documents": [
     "Birth Certificate",
        "Aadhaar Front",
        "Aadhaar Back",
        "Passport Photo",
        "Transfer Certificate",
        "Marksheet Photo",
    ],
    "address-academic": [
       "Permanent Address",
        "Pincode",
        "Current Address",
        "Percentage",
        "CGPA",
        "Grade",
    ],
  };

  const columns = tableColumns[category];

  if (!columns) {
    return <div>Category not found.</div>;
  }

  return <Table columns={columns} />;
}
