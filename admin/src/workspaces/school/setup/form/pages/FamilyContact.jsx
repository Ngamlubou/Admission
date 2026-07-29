import Table from "../../../shared/components/Table";

export default function FamilyContact() {
  return (
    <Table
      columns={[
        "Father Full Name",
        "Mother Full Name",
        "Guardian",
        "WhatsApp Number",
        "Alternative Number",
      ]}
    />
  );
}
