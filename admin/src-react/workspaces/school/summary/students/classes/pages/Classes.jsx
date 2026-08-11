import { useNavigate } from "react-router-dom";
import ClassNavigation from "../../../../shared/components/ClassNavigation";

export default function Classes() {
  const navigate = useNavigate();
const classes = [
  { name: "Play Group", route: "play-group", students: 28 },
  { name: "Nursery", route: "nursery", students: 34 },
  { name: "LKG", route: "lkg", students: 31 },
  { name: "UKG", route: "ukg", students: 36 },
  { name: "Class 1", route: "class-1", students: 40 },
  { name: "Class 2", route: "class-2", students: 38 },
  { name: "Class 3", route: "class-3", students: 42 },
  { name: "Class 4", route: "class-4", students: 35 },
  { name: "Class 5", route: "class-5", students: 44 },
  { name: "Class 6", route: "class-6", students: 41 },
  { name: "Class 7", route: "class-7", students: 39 },
  { name: "Class 8", route: "class-8", students: 37 },
  { name: "Class 9", route: "class-9", students: 36 },
  { name: "Class 10", route: "class-10", students: 34 },
  { name: "Class 11 Arts", route: "class-11-arts", students: 26 },
  { name: "Class 11 Science", route: "class-11-science", students: 22 },
  { name: "Class 12 Arts", route: "class-12-arts", students: 24 },
  { name: "Class 12 Science", route: "class-12-science", students: 18 },
];

  return (
    <ClassNavigation
      classes={classes}
      summaryLabel="Students"
      summaryKey="students"
      onClassClick={(item) =>
        navigate(`/school/student-summary/classes/${item.route}`)
      }
    />
  );
}
