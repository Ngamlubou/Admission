let storage = null;
const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');
const submitBtn = document.getElementById("submitBtn");
//========= Executors ============
document.addEventListener("DOMContentLoaded", async () => {
  await pendingCheck();
  renderHistory();
});
//------------
form.addEventListener('submit', async function(e) {  
e.preventDefault();
submitBtn.disabled = true;
const sClass = e.target.elements['classSelect'];
  const classText = sClass.selectedOptions[0].text;
  const classValue = sClass.value;
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

 storage = readStorage();

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
  name: "SP Admission form",
    description: "Payment of ₹100 for admission form in SmartPea",
 
handler: async function (response) {
    alert("Payment Success! Your admission form code is allotted.");
updateStatus(data.code, "success");
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
updateStatus(data.code, "failed");
submitBtn.disabled = false;
renderHistory();
  });

 rzp.open();
} catch (err) {
  alert(err.message || "Something went wrong");
submitBtn.disabled = false; }
});

//========= Utilities ============
function readStorage() 
{ return JSON.parse(localStorage.getItem("Payment History") || "[]"); }
//------------
function writeStorage(storage) { localStorage.setItem("Payment History", JSON.stringify(storage)); }
//------------
function updateStatus(code, status) 
{  storage = storage.map(item => {
    if (item.code === code) {
      return { ...item, status };  }
    return item;  });
writeStorage(storage);
   }
//------------
const supabaseClient = supabase.createClient( "https://lrlsgaijuawpiujymind.supabase.co", "sb_publishable_5eDgojN0OX5sFTjcPDHtGA_DdG32z33" );
async function checkDBcode(code) {
  const { data, error } = await supabaseClient
    .from("payments")    
    .select("code")
    .eq("code", code)
    .maybeSingle();
if (error) {   throw new Error();   }
  return !!data; 
}
//------------
async function pendingCheck() { 
const data = readStorage();
const pendingItems = data.filter(item => item.status === "pending");

if (pendingItems.length > 0) { 
try {
const checks = await Promise.all(
  pendingItems.map(async item => ({
    item,
    exists: await checkDBcode(item.code)
  }))
);

const validPending = checks
  .filter(entry => entry.exists)
  .map(entry => entry.item);

const validCodes = new Set(validPending.map(item => item.code));

storage = data.map(item => {
  if (item.status === "pending" && validCodes.has(item.code)) {
    return { ...item, status: "success" };
  }
  return item; });
writeStorage(storage); 
} 
catch (err) {
  ticketInfo.innerHTML = `
    <p style="color: red;">
      Last payment pending verification failed. Try again later.
    </p>
  `;
  ticketInfo.style.display = "block";
} }
//------------
function renderHistory() {
const data = readStorage();
  const successCard = document.getElementById("success_card");
  const failedCard = document.getElementById("failed_card");

  successCard.innerHTML = "";
  failedCard.innerHTML = "";

  const successItems = [...data]
    .filter(item => item.status === "success")
    .reverse();

  if (successItems.length > 0) {
    successCard.innerHTML = successItems.map(item => `
      <div>
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
      </details>`;   } }
