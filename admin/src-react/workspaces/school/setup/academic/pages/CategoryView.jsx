import { useParams } from "react-router-dom";
import Table from "../../../shared/components/Table";

export default function CategoryView() {
  const { category } = useParams();

  const tableColumns = {
    fees: [
      "Admission",
      "Tuition",
      "Hostel Admission",
      "Hostel Monthly",
    ],
    books: [
      "NoteBooks",
      "TextBooks",
    ],
    uniform: [
      "Boys",
      "Girls",
    ],
    "school-timing": [
      "Start",
      "End",
    ],
    "session-start": [
      "Admission Open",
      "Session Start",
      "Session End",
    ],
  };

  const columns = tableColumns[category];

  if (!columns) {
    return <div>Category not found.</div>;
  }

  return <Table columns={columns} />;
}
