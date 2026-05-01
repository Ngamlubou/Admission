//========= DOM Store =========
  const sFile = {
  aadhar: null,
  profile: null,
  msheet: null };
const classMap = {
    C: "Playgroup", F: "Nursery",    J: "KG-I", M: "KG-II",
    Q: "Class I", U: "Class II", X: "Class III", B: "Class IV",
    E: "Class V", H: "Class VI", L: "Class VII", P: "Class VIII",
    T: "Class IX", W: "Class X", A: "XI Arts", D: "XI Science",
   G: "XII Arts", K: "XII Science"  };
//========= DOM Fields =========
const sumBtn = document.getElementById("sumBtn");
const sumContent = document.getElementById("sumContent");

//-------- admission code --------
const codeSection = document.getElementById("codeSection");
const codeForm = document.getElementById("codeForm");
const codeInput = document.getElementById("codeInput");

//-------- personal detials --------
const personalSection = document.getElementById("personalSection");
const personalForm = document.getElementById("personalForm");
const firstName = document.getElementById("firstName");
const surname = document.getElementById("surname");
const fatherName = document.getElementById("fatherName");
const motherName = document.getElementById("motherName");
const dob = document.getElementById("dob");
const address = document.getElementById("address");

//-------- contact detials --------
const contactSection = document.getElementById("contactSection");
const contactForm = document.getElementById("contactForm");
const contactNo = document.getElementById("contactNo");
const contactRelate = document.getElementById("contactRelate");
const alternateNo = document.getElementById("alternateNo");

//-------- academic detials --------
const acadeSection = document.getElementById("acadeSection");
const acadeForm = document.getElementById("acadeForm");
const scoreArea = document.getElementById("scoreArea");
const scoreType = document.getElementById("scoreType");
const percArea = document.getElementById("percArea");
const percInput = document.getElementById("percInput");
const cgpaArea = document.getElementById("cgpaArea");
const cgpaInput = document.getElementById("cgpaInput");
const gradArea = document.getElementById("gradArea");
const gradInput = document.getElementById("gradInput");

//-------- upload document --------
const docSection = document.getElementById("docSection");
const docForm = document.getElementById("docForm");
const msheetArea = document.getElementById("msheetArea");
const msheetFile = document.getElementById("msheetFile");
const msheetView = document.getElementById("msheetView");
const msheetPdf = document.getElementById("msheetPdf");
const profileFile = document.getElementById("profileFile");
const profileView = document.getElementById("profileView");
const docType = document.getElementById("docType");
const docLabel = document.getElementById("docLabel");
const aadhaarFile = document.getElementById("aadhaarFile");
const aadhaarView = document.getElementById("aadhaarView");

//========= Active Workers  =========
codeForm.onsubmit = (e) => {
  e.preventDefault();
  const prefix = codeInput.value[0];
const studentClass = classMap[prefix];
sumBtn.textContent = `☰ ${studentClass} 2026 • ${codeInput.value}`;
 sumBtn.hidden = false;
 updateSumContent();
};

//-------- admission code --------
//-------- personal detials --------
//-------- contact detials --------

//-------- academic detials --------
scoreType.addEventListener("change", () => {
  percArea.hidden = true;
  cgpaArea.hidden = true;
  gradArea.hidden = true;
if (scoreType.value === "percentage") percArea.hidden = false;
if (scoreType.value === "cgpa") cgpaArea.hidden = false;
if (scoreType.value === "grade") gradArea.hidden = false;
});
//-------- upload document --------
bindUpload(aadhaarFile, aadhaarView, "aadhaar");
bindUpload(profileFile, profileView, "profile");
bindUpload(msheetFile, msheetView, "msheet");

function bindUpload(input, view, key) {
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
const compressedFile = await compressImg(file);
  const url = URL.createObjectURL(compressedFile);
 view.src = url;
 view.onload = () => {
      URL.revokeObjectURL(url); };
   sFile[key] = compressedFile; }); }

docType.addEventListener("change", () => {
docLabel.textContent =
    docType.options[docType.selectedIndex].text;
});
//========= Utility Function  =========
function toggleSumContent() {
  sumContent.hidden = !sumContent.hidden; }
function updateSumContent() {
  const personalHTML = firstName.value && `
  <h3>🟢 Personal Details</h3>
  <p>• Student: ${firstName.value} ${surname.value}</p>
  <p>• Father: ${fatherName.value} ${surname.value}</p>
 <p>• Mother: ${motherName.value} ${surname.value}</p>
 <p>• DOB: ${dob.value}</p>
 <p>• Address: ${address.value}</p>
`;
  sumContent.innerHTML = `
  ${personalHTML || "<h3>🟡 Personal Details</h3>"}
  `; }

//-------- admission code --------
//-------- personal detials --------
//-------- contact detials --------

//-------- academic detials --------
async function compressImg(file, maxWidth = 720, quality = 0.6) {
if ( file.type === "application/pdf" ) {
msheetPdf.hidden = false;
return new File([file], "studentfile.pdf", {
    type: file.type  });
}
  if ( file.size < 250 * 1024 ) {  return new File([file], "studentfile.jpeg", {
    type: file.type  });
}
const img = new Image();
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = (e) => (img.src = e.target.result);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
    const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob], file.name, {
            type: "image/jpeg",
          }));  },
        "image/jpeg",
        quality ); };
    reader.readAsDataURL(file); }); }
