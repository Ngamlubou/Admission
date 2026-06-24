//========= DOM Store =========
let result;
const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea";
//========= DOM Fields =========
//========= Data Producers =========
const importKey = new URLSearchParams(location.search).get("key");
const classInfo = {
  "Playgroup":       { admission: 4000, monthly: 700,  opening: "15 June 2026", timing: "09:00 AM – 12:00 PM" },
  "Nursery":         { admission: 4000, monthly: 700,  opening: "15 June 2026", timing: "09:00 AM – 12:00 PM" },
  "kg 1":            { admission: 4000, monthly: 700,  opening: "15 June 2026", timing: "09:00 AM – 12:00 PM" },
  "kg 2":            { admission: 4000, monthly: 700,  opening: "15 June 2026", timing: "09:00 AM – 12:00 PM" },

  "class 1":         { admission: 5000, monthly: 800,  opening: "16 June 2026", timing: "09:00 AM – 02:00 PM" },
  "class 2":         { admission: 5000, monthly: 800,  opening: "16 June 2026", timing: "09:00 AM – 02:00 PM" },
  "class 3":         { admission: 5000, monthly: 800,  opening: "16 June 2026", timing: "09:00 AM – 02:00 PM" },
  "class 4":         { admission: 5000, monthly: 800,  opening: "16 June 2026", timing: "09:00 AM – 02:00 PM" },
  "class 5":         { admission: 5000, monthly: 800,  opening: "16 June 2026", timing: "09:00 AM – 02:00 PM" },

  "class 6":         { admission: 6000, monthly: 900,  opening: "20 June 2026", timing: "09:00 AM – 03:10 PM" },
  "class 7":         { admission: 6000, monthly: 900,  opening: "20 June 2026", timing: "09:00 AM – 03:10 PM" },
  "class 8":         { admission: 6000, monthly: 900,  opening: "20 June 2026", timing: "09:00 AM – 03:10 PM" },
  "class 9":         { admission: 6000, monthly: 900,  opening: "25 June 2026", timing: "09:00 AM – 03:30 PM" },
  "class 10":        { admission: 6000, monthly: 900,  opening: "25 June 2026", timing: "09:00 AM – 03:30 PM" },

  "class 11 Arts":   { admission: 7000, monthly: 1000, opening: "01 July 2026", timing: "09:00 AM – 04:00 PM" },
  "class 11 Science":{ admission: 7000, monthly: 1000, opening: "01 July 2026", timing: "09:00 AM – 04:00 PM" },
  "class 12 Arts":   { admission: 7000, monthly: 1000, opening: "01 July 2026", timing: "09:00 AM – 04:00 PM" },
  "class 12 Science":{ admission: 7000, monthly: 1000, opening: "01 July 2026", timing: "09:00 AM – 04:00 PM" }
};
//========= Active Triggers =========
  renderSavedKeys();
if (importKey) { fetchJoiningGuide(importKey); }

  function renderSavedKeys() {
  const list = JSON.parse(  localStorage.getItem("studentInfo") || "[]" );
   document.getElementById("savedKeys").innerHTML = list.map(item => `
    <div class="card" onclick="inputKey.value='${item.key}'">
      <div>${item.name}</div>
      <div>${item.class}</div>
    </div>
  `).join("");
}
  async function fetchJoiningGuide(key) {
  try {
    const res = await fetch(`${baseUrl}/joining-guide`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key })
    });
     result = await res.json();
if (!res.ok) {   alert(result); return;   }

const uniformSections = [
  ["Same as Image", result.uniform.required],
  ["Accepted Styles", result.uniform.shoes],
  ["Any One Colour", result.uniform.houseTShirt]
];
const bookSections = [
  ["Textbooks", result.books.textbooks],
  ["Notebooks", result.books.notebooks]
];
renderImages(uniformSections, "uniformGrid");
renderImages(bookSections, "bookGrid");


  } catch (err) {
    alert(err.message || "Failed to load student details");  }
}

//========= Html Inject Function  =========
function renderImages(sections, id) {
  const infoClass = classInfo[result.class];
studentName.textContent = result.student_name;
studentClass.textContent = result.class;;
registrationNo.textContent = result.registration_no;
admissionFee.textContent = `₹${infoClass.admission.toLocaleString("en-IN")}`;
monthlyFee.textContent = `₹${infoClass.monthly.toLocaleString("en-IN")}`;
benefit.textContent =
  result.benefit || "Monthly fee is payable for all 12 months of the academic session.";
schoolTiming.textContent = infoClass.timing;
schoolOpening.textContent = infoClass.opening;

document.getElementById(id).innerHTML = sections.map(([title, items]) => `
    <h4>${title}</h4>
    <div class="imageGrid">
      ${items.map(item => `
        <img
          src="Images/${item.type || item}.webp"
          alt="${item.type || item}"
          data-note="${item.quantity ? `Quantity: ${item.quantity}` : ""}"
          class="gridImage"
          onclick="previewImg.src=this.src; previewTitle.textContent = this.alt; previewNote.textContent=this.dataset.note; previewBox.hidden=false"
        >
      `).join("")}
    </div>
  `).join("");
}
//========= Utility Function  =========
