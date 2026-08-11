import { useNavigate } from "react-router-dom";
import ClassNavigation from "../../../../shared/components/ClassNavigation";

export default function Classes() {
  const navigate = useNavigate();

  const classes = [
    {
      name: "Play Group",
      route: "play-group",
      annualFeeReceivable: "₹2,35,000",
    },
    {
      name: "Nursery",
      route: "nursery",
      annualFeeReceivable: "₹2,92,000",
    },
    {
      name: "Class 1",
      route: "class-1",
      annualFeeReceivable: "₹4,65,000",
    },
    {
      name: "Class 5",
      route: "class-5",
      annualFeeReceivable: "₹5,12,000",
    },
  ];

  return (
    <ClassNavigation
      classes={classes}
      summaryLabel="Annual Fee Receivable"
      summaryKey="annualFeeReceivable"
      onClassClick={(item) =>
        navigate(`/school/fee-summary/classes/${item.route}`)
      }
    />
  );
}
