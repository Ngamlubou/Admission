export default function AdmissionSteps({ step, setStep }) {
  const steps = [
  "Student",
  "Family",
  "Address & Academic",
  "Documents"
];
  return (
  <>
    <h1>New Admission</h1>
    <nav>  {steps.map((item, index) => (
        <button  key={item}
        type="button"
        onClick={() => setStep(index)}
        className={step === index ? "stepButton active" : "stepButton"} >
          {item}
        </button>
      ))} </nav>   </>
  );
}
