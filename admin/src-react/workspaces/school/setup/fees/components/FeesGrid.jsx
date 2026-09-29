import { useState } from "react";
import { DataGrid, renderTextEditor } from "react-data-grid";
import "react-data-grid/lib/styles.css";

const initialRows = [
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

const initialColumns = [
  {
    key: "name",
    name: "Fee Name",
    width: 200,
    frozen: true,
    renderEditCell: renderTextEditor,
  },
  { key: "type", name: "Type", width: 150 },
  { key: "frequency", name: "Frequency", width: 150 },
  { key: "class1", name: "Class 1", width: 120 },
  { key: "class2", name: "Class 2", width: 120 },
  { key: "class3", name: "Class 3", width: 120 },
];

export default function FeesGrid() {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);

  function addRow() {
    const id = Date.now();

    const newRow = {
      id,
      name: "",
      type: "",
      frequency: "",
    };

    columns.forEach((column) => {
      if (column.key.startsWith("class")) {
        newRow[column.key] = 0;
      }
    });

    setRows([...rows, newRow]);
  }

  function deleteRow() {
    if (rows.length === 0) return;

    setRows(rows.slice(0, -1));
  }

  function addColumn() {
    const number = columns.filter((column) =>
      column.key.startsWith("class")
    ).length + 1;

    const key = `class${number}`;

    const newColumn = {
      key,
      name: `Class ${number}`,
    };

    setColumns([...columns, newColumn]);

    setRows(
      rows.map((row) => ({
        ...row,
        [key]: 0,
      }))
    );
  }

  function deleteColumn() {
    const classColumns = columns.filter((column) =>
      column.key.startsWith("class")
    );

    if (classColumns.length === 0) return;

    const columnToRemove = classColumns[classColumns.length - 1];

    setColumns(
      columns.filter((column) => column.key !== columnToRemove.key)
    );

    setRows(
      rows.map((row) => {
        const newRow = { ...row };
        delete newRow[columnToRemove.key];
        return newRow;
      })
    );
  }

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={deleteRow}>Delete Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={deleteColumn}>Delete Column</button>
      </div>

      <DataGrid
  columns={columns}
  rows={rows}
  onRowsChange={setRows}
  defaultColumnOptions={{
    resizable: true,
  }}
  rowHeight={35}
/>
    </div>
  );
}
