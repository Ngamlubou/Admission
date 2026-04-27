   const codeForm = document.getElementById("codeForm");
 const codeInput = document.getElementById("codeInput");
  const codeError = document.getElementById("codeError");
const personalSection = document.getElementById("personalSection");

  codeForm.addEventListener("submit", function (e) {
    e.preventDefault();
  const code = codeInput.value.toUpperCase();
const prefix = code.charAt(0);
  const classMap = {
    A: "Play Group",
    B: "Nursery",
    C: "KG-1",
    D: "KG-2",
    E: "Class 1",
    F: "Class 2",
    G: "Class 3",
    H: "Class 4",
    J: "Class 5",
    K: "Class 6",
    L: "Class 7",
    M: "Class 8",
    N: "Class 9",
    P: "Class 10",
    Q: "Class 11",
    R: "Class 12"
  }; 
const sClass = classMap[prefix];
 personalSection.style.display = "block"; 
 

  });
