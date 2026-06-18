//========= DOM Store =========
let billingData = null;
let tuitionDue = [];
let hostelDue = [];
const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea";
const count = {
  tuition: 1,
  hostel: 1
};
//========= DOM Fields ID =========
const billDetails = document.getElementById("billDetails");
const studentDetails = document.getElementById("studentDetails");
const invoiceDetails = document.getElementById("invoiceDetails");
//========= Active workers =========
const importKey =
  new URLSearchParams(location.search)
  .get("key");

renderSavedKeys();

if (importKey) { fetchBillingDetails(importKey); }

function renderSavedKeys() {
  const list = JSON.parse(  localStorage.getItem("studentInfo") || "[]" );
   document.getElementById("savedKeys").innerHTML = list.map(item => `
    <div class="card" onclick="inputKey.value='${item.key}'">
      <div>${item.name}</div>
      <div>${item.class}</div>
    </div>
  `).join("");
}


async function fetchBillingDetails(key) {
  try {
    const res = await fetch(`${baseUrl}/billing-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key })
    });
    const result = await res.json();
if (!res.ok) {   alert(result); return;   }
billingData = result;

tuitionDue = Object.entries(
  billingData.tuition_schedule
).filter(([month]) =>
  billingData.tuition_fees_status[month] === "due"
);

 hostelDue = Object.entries(
  billingData.hostel_schedule || {}
).filter(([month]) =>
  billingData.hostel_fees_status?.[month] === "due"
);
renderBilling();
  } catch (err) {
    alert(err.message || "Failed to load student details");  }
}


function renderBilling() {
  const months =
  Object.keys(billingData.tuition_schedule);

  const grandTotal =
  [...Object.values(billingData.tuition_schedule),
   ...Object.values(billingData.hostel_schedule || {})]
  .reduce((sum, amt) => sum + amt, 0);

  let totalDue = 0;
for (const month of months) {
  totalDue +=
    billingData.tuition_fees_status[month] === "due"    ? billingData.tuition_schedule[month]     : 0;

   totalDue +=
    billingData.hostel_fees_status?.[month] === "due"  ? billingData.hostel_schedule?.[month] || 0  : 0;
}
const totalPaid = grandTotal - totalDue;

 studentDetails.innerHTML = `
  <h2>${billingData.student_name}</h2>

  <p>${billingData.class}</p>
  <p>
    Registration No. ${billingData.registration_no}
  </p>
   ${billingData.benefit ? `
    <p>
      Benefit: <strong>${billingData.benefit}</strong>
    </p>
  ` : ""}
<br>
 <p>Fees to Pay <strong> ₹${totalDue.toLocaleString("en-IN")}</strong>
 </p>
   <p>Total Paid <strong> ₹${totalPaid.toLocaleString("en-IN")}</strong>
   </p>

`;
 billDetails.innerHTML = months.map(month => {
 const tuitionStatus =  billingData.tuition_fees_status[month];
  const hostelStatus = billingData.hostel_fees_status?.[month];
  return `
  <div class="container">
    <h3>${month}</h3>
    <div class="row">
      <span>Tuition Fee</span>
      <strong class="${tuitionStatus}">
        ₹${billingData.tuition_schedule[month] || 0}
        •  ${tuitionStatus}
      </strong> </div>

 ${hostelStatus ? `
    <div class="row">
      <span>Hostel Fee</span>
      <strong class="${hostelStatus}">
        ₹${billingData.hostel_schedule[month] || 0}
        •  ${hostelStatus}
      </strong>
    </div>` : ""}
  </div>  `;
}).join("");
}


 function renderInvoiceDetails() {

   const selectedTuition = tuitionDue.slice(0, count.tuition);
const selectedHostel = hostelDue.slice(0, count.hostel);

  const feesTotal =     [...selectedTuition, ...selectedHostel]
      .reduce((sum, item) => sum + item[1], 0);

const totalToPay =
  +(feesTotal / 0.9764).toFixed(2); // school receives 97.64%

  const processingFee =
  +(totalToPay * 0.02).toFixed(2);

const gstFee =
  +(processingFee * 0.18).toFixed(2);

 const gatewayFee =
  totalToPay - feesTotal;

  invoiceDetails.innerHTML = `
    <h3>Tuition Fees</h3>
    ${selectedTuition.map(item => `
      <div class="row">
        <span>${item[0]}</span>
        <strong>₹${item[1]}</strong>
      </div>
    `).join("")}

    <div class="controls">
      <button onclick="updateCount('tuition', -1)">−</button>
      <button onclick="updateCount('tuition', 1)">+</button>
    </div>

   ${hostelDue.length ? ` <h3>Hostel Fees</h3>
    ${selectedHostel.map(item => `
      <div class="row">
        <span>${item[0]}</span>
        <strong>₹${item[1]}</strong>
      </div>
    `).join("")}
    <div class="controls">
      <button onclick="updateCount('hostel', -1)">−</button>
      <button onclick="updateCount('hostel', 1)">+</button>
    </div> ` : ""}
<hr>

  <div class="row">
    <span>Fees Total</span>
    <strong>₹${feesTotal.toLocaleString("en-IN")}</strong>
  </div>

  <div class="row">
    <span>Gateway Fee</span>
    <strong>₹${gatewayFee.toLocaleString("en-IN")}</strong>
  </div>

  <details>
    <summary>How is this calculated?</summary>

    <div class="row">
      <span>Processing Fee (2%)</span>
      <strong>₹${processingFee.toLocaleString("en-IN")}</strong>
    </div>

    <div class="row">
      <span>GST (18%)</span>
      <strong>₹${gstFee.toLocaleString("en-IN")}</strong>
    </div>
  </details>

  <hr>

  <div class="row total">
    <span>Total to Pay</span>
    <strong>₹${totalToPay.toLocaleString("en-IN")}</strong>
  </div>

  <p class="note">
    Paying online includes payment gateway charges.
    You may also pay directly at the school office.
  </p>

  <button class="pay-btn">
    Proceed Payment
  </button>
`;
}

function updateCount(type, change) {
  const max = type === "tuition"   ? tuitionDue.length : hostelDue.length;
  count[type] = Math.max(
    0,
    Math.min(max, count[type] + change)
  );
  renderInvoiceDetails();
}
