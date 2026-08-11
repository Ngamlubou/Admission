import Overview from "../../shared/components/Overview";
import { useParams } from "react-router-dom";

export default function ClassDetails() {
  const { classId } = useParams();

  return <Overview />;
}
