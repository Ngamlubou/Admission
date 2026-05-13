//========= DOM Store =========
  const sFile = {
  aadhaar: null,
  profile: null,
  tc: null,
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
const spinner = document.getElementById("spinner");
//-------- admission code --------
const codeSection = document.getElementById("codeSection");
const codeForm = document.getElementById("codeForm");
const codeInput = document.getElementById("codeInput");
const codeError = document.getElementById("codeError");

//-------- personal detials --------
const personalSection = document.getElementById("personalSection");
const personalForm = document.getElementById("personalForm");
const studentName = document.getElementById("studentName");
const dob = document.getElementById("dob");
const demographicArea = document.getElementById("demographicArea");
const bloodGroup = document.getElementById("bloodGroup");
const socialCategory = document.getElementById("socialCategory");
const minorityStatus = document.getElementById("minorityStatus");
const disabilityType = document.getElementById("disabilityType");
const aadhaarNoArea = document.getElementById("aadhaarNoArea");
const aadhaarNo = document.getElementById("aadhaarNo");
const penArea = document.getElementById("penArea");
const penNo = document.getElementById("penNo");

//-------- contact detials --------
const contactSection = document.getElementById("contactSection");
const contactForm = document.getElementById("contactForm");
const fatherName = document.getElementById("fatherName");
const motherName = document.getElementById("motherName");
const guardianName = document.getElementById("guardianName");
const contactNo = document.getElementById("contactNo");
const contactRelate = document.getElementById("contactRelate");
const alternateNo = document.getElementById("alternateNo");

//-------- academic detials --------
const acadeSection = document.getElementById("acadeSection");
const acadeForm = document.getElementById("acadeForm");
const addressPer = document.getElementById("addressPer");
const pincode = document.getElementById("pincode");
const addressCur = document.getElementById("addressCur");
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
const tcArea = document.getElementById("tcArea");
const tcFile = document.getElementById("tcFile");
const tcView = document.getElementById("tcView");
const aadhaarType = document.getElementById("docType");
const aadhaarLabel = document.getElementById("aadhaarLabel");
const aadhaarFile = document.getElementById("aadhaarFile");
const aadhaarView = document.getElementById("aadhaarView");
const aadhaarView1 = document.getElementById("aadhaarView1");

//========= Active Workers  =========
//-------- admission code --------
codeForm.onsubmit = async (e) => {
  e.preventDefault();
  spinner.hidden = false;
  const code = codeInput.value.trim();
  const prefix = code[0];
    const studentClass = classMap[prefix];
    sumBtn.textContent = `☰ ${studentClass} 2026 • ${code}`;
    sumBtn.hidden = false;
    updateSumContent();
try {
    const res = await fetch(
     "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea/admissionform-code",
      {   method: "POST",
        headers: {   "Content-Type": "application/json"  },
        body: JSON.stringify({ code })  }
    );
if (!res.ok) {  throw new Error("Server not responding");  }
    const result = await res.json();
spinner.hidden = true;
    if (result.status === 0) { codeError.hidden = false;     return;  }

} catch (err) { alert(err.message || "Something went wrong"); }
};

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
bindUpload(msheetFile, msheetView, "msheet");
bindUpload(tcFile, tcView, "tc");
bindUpload(profileFile, profileView, "profile");
bindUpload(aadhaarFile, [aadhaarView, aadhaarView1], "aadhaar");

function bindUpload(input, view, key) {
  let index = 0;
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const compressedFile = await compressImg(file);
    const url = URL.createObjectURL(compressedFile);
    if (Array.isArray(view)) {
      if (!sFile[key]) {  sFile[key] = [];  }
      view[index].src = url;
 view[index].onload = () => {     URL.revokeObjectURL(url);  };
      sFile[key][index] = compressedFile;
      index = (index + 1) % 2;
    } else {
      view.src = url;
      view.onload = () => {  URL.revokeObjectURL(url); };
      sFile[key] = compressedFile;  } });
}

aadhaarType.addEventListener("change", () => {
aadhaarLabel.textContent =
    aadhaarType.options[aadhaarType.selectedIndex].text;
});
//========= Utility Function  =========
function toggleSumContent() {
  sumContent.hidden = !sumContent.hidden; }

function updateSumContent() {
  const personalHTML = studentName.value && `
  <h3>🟢 Personal Details</h3>
  <p>• Student Name: ${studentName.value}</p>
 <p>• DOB: ${dob.value}</p>
 <p>• Blood Group: ${bloodGroup.value}</p>
<p>• Social Category: ${socialCategory.value}</p>
<p>• Minority Status: ${minorityStatus.value}</p>
<p>• Disability (CWSN) status : ${disabilityType.value || "No"}</p>
<p>• Aadhaar Number: ${aadhaarNo.value || "__"}</p>
${penNo.value ? `<p>• PEN: ${penNo.value}</p>`  : ""}
`;
const contactHTML = contactNo.value && `
  <h3>🟢 Family & Contact Details</h3>
 <p>• Father Name: ${fatherName.value} </p>
 <p>• Mother Name: ${motherName.value}</p>
  <p>• ${contactRelate.value} Whatsapp: ${contactNo.value}</p>
  <p>• Alternative: ${alternateNo.value || "__"} </p>
`;
const acadeHTML = pincode.value && `
  <h3>🟢 Address & Academic Details</h3>
<p>• Permanent Address: ${addressPer.value}, ${pincode.value}</p>
<p>• Present Address: ${addressCur.value}</p>
  <p>• ${scoreType.value}: ${percInput.value || cgpaInput.value ||  gradInput.value}  </p>
`;
const docHTML = sFile.profile && `
   <h3>🟢 Upload Documents</h3>
  ${sFile.msheet ? "<p>• Marksheet: ✔️</p>" : ""}
 <p>• Profile Photo: ✔️</p>
  ${sFile.tc ? "<p>• Transfer Certificate: ✔️</p>" : ""}
 <p>• ${aadhaarLabel.textContent}: ✔️</p>
`;
  sumContent.innerHTML = `
  ${personalHTML || "<h3>🟡 Personal Details</h3>"}
${contactHTML || "<h3>🟡 Family & Contact Details</h3>"}
${acadeHTML || "<h3>🟡 Address & Academic Details</h3>"}
${docHTML || "<h3>🟡 Upload Documents</h3>"}
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
