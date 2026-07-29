import Table from "../../../shared/components/Table";

export default function Documents() {
  return (
    <Table
      columns={[
        "Birth Certificate",
        "Aadhaar Front",
        "Aadhaar Back",
        "Passport Photo",
        "Transfer Certificate",
        "Marksheet Photo",
      ]}
    />
  );
}
