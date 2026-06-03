//========= DOM Store =========
//-------- fees --------
const data = {
 studentName: "James Bond",
    registration: "OHHS1001",
    class: "Playgroup",
    benefit: "100% Admission Scholarship",
totalDue: 7700,
  totalPaid: 3900,

  fees: [
  { name: "Admission Fee",
  items: [
      { title: "Admission Fee",
        amount: 0,
        status: "cleared" },
      {    title: "Hostel Admission",
        amount: 2000,
        status: "paid"    }    ]
  },

  { name: "May 2026",
  items: [
      {  title: "Tuition Fee",
        amount: 700,
        status: "paid"   },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "paid"  }   ]
  },

  {  name: "June 2026",
 items: [
      {  title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {  title: "Hostel Fee",
        amount: 2500,
        status: "due"   }   ]
  },

  {  name: "July 2026",
   items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due" },
      {  title: "Hostel Fee",
        amount: 2500,
        status: "due"   }   ]
  },

  {   name: "August 2026",
    items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "due"   }  ]
  },

  {  name: "September 2026",
   items: [
      {   title: "Tuition Fee",
        amount: 700,
        status: "due"    },
      {    title: "Hostel Fee",
        amount: 2500,
        status: "due"   }    ]
  },

  {  name: "October 2026",
    items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due"   },
      {     title: "Hostel Fee",
        amount: 2500,
        status: "due"    }    ]
  },

  {   name: "November 2026",
    items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due"    },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "due"   }  ]
  },

  {   name: "December 2026",
   items: [
      {      title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "due"   }  ]
  },

  { name: "January 2027",
items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {    title: "Hostel Fee",
        amount: 2500,
        status: "due"   }  ]
  },

  {  name: "February 2027",
 items: [
      {  title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "due"  } ]
  },

  {  name: "March 2027",
  items: [
      {  title: "Tuition Fee",
        amount: 700,
        status: "due"  },
      {  title: "Hostel Fee",
        amount: 2500,
        status: "due"   }  ]
  },

  { name: "April 2027",
 items: [
      {    title: "Tuition Fee",
        amount: 700,
        status: "due"   },
      {   title: "Hostel Fee",
        amount: 2500,
        status: "due"    }  ]
  }
]
}
const baseUrl =  "https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/smart-pea";
//========= DOM Fields =========
const inputKey = document.getElementById("inputKey");
const billDetails = document.getElementById("billDetails");
const studentDetails = document.getElementById("studentDetails");
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
const billArea = renderBilling();

function renderBilling() {
 studentDetails.innerHTML = `
  <h2>${data.studentName}</h2>

  <p>${data.class}</p>

  <p>
    Registration No. ${data.registration}
  </p>
<br>
 <p>Fees to Pay <strong> ₹${data.totalDue.toLocaleString("en-IN")}</strong>
 </p>
   <p>Total Paid <strong> ₹${data.totalPaid.toLocaleString("en-IN")}</strong>
   </p>
<br>
  ${data.benefit
    ? `<p>${data.benefit}</p>`
    : ""
  }
`;
 billDetails.innerHTML = data.fees.map(month => `
  <div class="card fee-card">
    <h3>${month.name}</h3>
    ${month.items.map(fee => `
      <div class="row">
        <span>${fee.title}</span>
        <strong class="${fee.status}">
          ₹${fee.amount} • ${fee.status}
        </strong>
      </div>
    `).join("")}
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
const billData = await res.json();
  if (!res.ok) {
 throw new Error("Server not responding"); }
} catch (err) {
  alert( "Something went wrong");
 } }
