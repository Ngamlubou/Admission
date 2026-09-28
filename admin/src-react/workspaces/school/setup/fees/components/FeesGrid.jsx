import { DataGrid } from "react-data-grid";
import "react-data-grid/lib/styles.css";

const rows = [
  {
    id: 1,
    name: "Tuition Fee",
    type: "Tuition",
    frequency: "Monthly",
    class1: 2000,
    class2: 2200,
    class3: 2500,
  },
  {
    id: 2,
    name: "Admission Fee",
    type: "Admission",
    frequency: "Once",
    class1: 5000,
    class2: 5000,
    class3: 5000,
  },
  {
    id: 3,
    name: "Bus Fee",
    type: "Transport",
    frequency: "Monthly",
    class1: 1200,
    class2: 1400,
    class3: 0,
  },
];

const columns = [
  { key: "name", name: "Fee Name" },
  { key: "type", name: "Type" },
  { key: "frequency", name: "Frequency" },
  { key: "class1", name: "Class 1" },
  { key: "class2", name: "Class 2" },
  { key: "class3", name: "Class 3" },
];

export default function FeesGrid() {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
    />
  );
}
