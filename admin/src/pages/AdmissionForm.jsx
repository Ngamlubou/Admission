import { useState } from "react";

import AdmissionSteps from "../components/admission/AdmissionSteps";
import StudentSection from "../components/admission/StudentSection";
import FamilySection from "../components/admission/FamilySection";
import AddressAcademic from "../components/admission/AddressAcademic";
import DocumentSection from "../components/admission/DocumentSection";

export default function AdmissionForm() {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ student: {},  family: {},   academic: {},   documents: {} });

  const sections = [
    <StudentSection />, <FamilySection />, <AddressAcademic />, <DocumentSection />];

  return (
    <main>
    <AdmissionSteps  step={step}    setStep={setStep}  />
   {sections[step]}
    </main>
  );
}
