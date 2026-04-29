   const codeForm = document.getElementById("codeForm");
 const codeInput = document.getElementById("codeInput");
  const codeError = document.getElementById("codeError");
const personalSection = document.getElementById("personalSection");

const img = document.createElement("img");
img.src = URL.createObjectURL(file);

document.getElementById("aadharFile").onchange = (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById("preview").src = URL.createObjectURL(file);
  }
};

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
const areas = [
  "Mantripan, Kanglatongbi",
  "Namdilong, Kanglatongbi",
  "Tisperi, Kanglatongbi",
  "Bazar Board, Kanglatongbi",
  "Hatikhuwa, Kanglatongbi",
  "Ply Factory, Kanglatongbi",
  "Gas Factory, Kanglatongbi",
  "Shantipur, Kanglatongbi",
  "Mandir Area, Kanglatongbi",
  "Makhan Road, Kanglatongbi",
  "Chundiram, Kanglatongbi",
  "Makhan Village",
  "Sak Village",
  "Awang Sekmai",
  "Sekmai Bazar"
];
const sClass = classMap[prefix];
 personalSection.style.display = "block"; 
 

  });
     
