import Table from "../../../shared/components/Table";

export default function AddressAcademic() {
  return (
    <Table
      columns={[
        "Permanent Address",
        "Pincode",
        "Current Address",
        "Percentage",
      ]}
    />
  );
}
