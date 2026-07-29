import Table from "../../../shared/components/Table";

export default function PersonalDetails() {
  return (
      <Table
        columns={[
          "Full Name",
          "Gender",
          "DOB",
          "Blood Group",
          "Social Category",
          "Minority",
          "CWSN",
          "Aadhaar",
          "PEN",
        ]}
      />
  );
}
