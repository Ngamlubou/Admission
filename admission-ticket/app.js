let storage = null;
const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');
const submitBtn = document.getElementById("submitBtn");

form.addEventListener('submit', async function(e) {  
e.preventDefault();
submitBtn.disabled = true;
const sClass = e.target.elements['classSelect'];
  const classText = sClass.selectedOptions[0].text;
  const classValue = sClass.value;

function updateStatus(order_id, status) {
    storage = storage.map(item => {
    if (item.order_id === order_id) {
      return { ...item, status };
    }
    return item;  });
  localStorage.setItem("Payment History", JSON.stringify(storage));
}

  try {  
const res = await fetch("https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/create-order", {
 method: "POST", 
headers: {  "Content-Type": "application/json" }, 
body: JSON.stringify({
  classValue: classValue
}) 
});
const data = await res.json();
  if (!res.ok) {
  throw new Error(data.error || "Server not responding"); }

 storage = JSON.parse(localStorage.getItem("Payment History")) || [];

storage.push({
  order_id: data.order_id,
  code: data.code,
  class: classText,
  status: "pending"
});
localStorage.setItem("Payment History", JSON.stringify(storage));
  
const setting = {
    key: "rzp_test_SYuOBsX5gApP7v", 
    amount: data.amount, 
    currency: "INR",
order_id: data.order_id,
  name: "SP Addmission form",
    description: "Payment of ₹100 for admission form in SmartPea",
 
handler: async function (response) {
    alert("Payment Success! Your admission form code is allotted.");
updateStatus(data.order_id, "success");
submitBtn.disabled = false;
renderHistory();
const ticketHTML = `
      <h3>Ticket Details</h3>
      <p><strong>Class:</strong> ${classText}</p>
      <p><strong>Code:</strong><span> Use this below code for admission.</span></p>
      <h1>${data.code}</h1>
    `;
ticketInfo.innerHTML = ticketHTML;
    ticketInfo.style.display = 'block';
},
    theme: { color: "#3399cc"    }
  };
 
 const rzp = new Razorpay(setting);
  rzp.on("payment.failed", function (response) {
    alert("Payment Failed! Code not allotted for admission.");
updateStatus(data.order_id, "failed");
submitBtn.disabled = false;
renderHistory();
  });

 rzp.open();
} catch (err) {
  alert(err.message || "Something went wrong");
submitBtn.disabled = false; }
});

//------------

function renderHistory() {
  const data = JSON.parse(localStorage.getItem("Payment History") || "[]");

  const successCard = document.getElementById("success_card");
  const failedCard = document.getElementById("failed_card");

  successCard.innerHTML = "";
  failedCard.innerHTML = "";

  const successItems = [...data]
    .filter(item => item.status === "success")
    .reverse();

  if (successItems.length > 0) {
    successCard.innerHTML = successItems.map(item => `
      <div class="card success">
        <h3>Admission Success</h3>
        <p><strong>Class:</strong> ${item.class}</p>
        <p><strong>Code:</strong> ${item.code}</p>
      </div>
    `).join("");
  }

  const failedItems = data.filter(item => item.status === "failed");

  if (failedItems.length > 0) {
    failedCard.innerHTML = `
      <details>
        <summary>Failed Payments</summary>
        <div>
          <div class="row header">
            <span>Order ID</span>
            <span>Status</span>
          </div>
          ${failedItems.map(item => `
            <div class="row">
              <span>${item.order_id}</span>
              <span>Failed</span>
            </div>
          `).join("")}
        </div>
      </details>`;
  }
}

document.addEventListener("DOMContentLoaded", renderHistory);
