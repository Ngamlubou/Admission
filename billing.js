//========= DOM Store =========
//-------- fees --------
const billData = {
  student: {  name: "James Bond",
    registration: "OHHS1001",
    class: "Playgroup",
    benefit: "100% Admission Scholarship" },

  fees: [  {name: "Admission Fee",
      amount: 0,
      status: "cleared"  },

    { name: "May 2026",
      amount: 700,
      status: "paid" },

    {  name: "June 2026",
      amount: 700,
      status: "due" },

    { name: "July 2026",
      amount: 700,
      status: "due"  },

    { name: "August 2026",
      amount: 700,
      status: "due" },

    { name: "September 2026",
      amount: 700,
      status: "due"  },

    {name: "October 2026",
      amount: 700,
      status: "due" },

    { name: "November 2026",
      amount: 700,
      status: "due" },

    {name: "December 2026",
      amount: 700,
      status: "due" },

    {  name: "January 2027",
      amount: 700,
      status: "due"  },

    {   name: "February 2027",
      amount: 700,
      status: "due"  },

    { name: "March 2027",
      amount: 700,
      status: "due" },

    { name: "April 2027",
      amount: 700,
      status: "due"  }  ]
}
const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea";
//========= DOM Fields =========
const inputKey = document.getElementById("inputKey");
const billDetials = document.getElementById("billDetials");

//========= Active workers =========
const importKey =
  new URLSearchParams(location.search)
  .get("key");

if (!importKey) { renderSavedKeys();
} else {
 fetchBillingDetails(importKey);
}

function renderSavedKeys() {
  const list = JSON.parse(  localStorage.getItem("Payment History") || "[]" );
   document.getElementById("savedKeys").innerHTML = list.map(item => `
    <div class="saved-key" data-key="${item.key}">
      <div class="name">${item.code}</div>
      <div class="meta">${item.class}</div>
    </div>
  `).join("");
}

async function fetchBillingDetails(Key) {
try {
const res = await fetch(`${baseUrl}/fetch-billing-details`, {
 method: "POST",
headers: {  "Content-Type": "application/json" },
body: JSON.stringify({
  Key
})
});
const data = await res.json();
  if (!res.ok) {
 throw new Error("Server not responding"); }
} catch (err) {
  alert(err.message || "Something went wrong");
 } }
