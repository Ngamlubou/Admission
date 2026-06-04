//========= DOM Store =========
//-------- fees --------
const data = {
 studentName: "James Bond",
    registration: "OHHS1001",
    class: "Playgroup",
    benefit: "100% Admission Scholarship",
totalDue: 7700,
  totalPaid: 3900,
  tuitionDue: [
    ["June 2026", 700],
    ["July 2026", 700],
    ["August 2026", 700]
  ],

  hostelDue: [
    ["June 2026", 2500],
    ["July 2026", 2500],
    ["August 2026", 2500]
  ],
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
let tuitionCount = 2;
let hostelCount = 1;
//========= DOM Fields =========
const inputKey = document.getElementById("inputKey");
const billDetails = document.getElementById("billDetails");
const studentDetails = document.getElementById("studentDetails");
const invoiceDetails = document.getElementById("invoiceDetails");
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

 function renderPayment() {
  const selectedTuition =  data.tuitionDue.slice(0, tuitionCount);
    const selectedHostel = data.hostelDue.slice(0, hostelCount);

  invoiceDetails.innerHTML = `
    <h3>Tuition Fees</h3>
    ${selectedTuition.map(item => `
      <div class="row">
        <span>${item[0]}</span>
        <strong>₹${item[1]}</strong>
      </div>
    `).join("")}

    <div class="controls">
      <button onclick="removeTuition()">−</button>
      <button onclick="addTuition()">+</button>
    </div>

    <h3>Hostel Fees</h3>
    ${selectedHostel.map(item => `
      <div class="row">
        <span>${item[0]}</span>
        <strong>₹${item[1]}</strong>
      </div>
    `).join("")}
    <div class="controls">
      <button onclick="removeHostel()">−</button>
      <button onclick="addHostel()">+</button>
    </div>
  `;
}
renderPayment();
function addTuition() {
  if (tuitionCount < data.tuitionDue.length) {
    tuitionCount++;
    renderPayment();
  }
}

function removeTuition() {
  if (tuitionCount >0) {
    tuitionCount--;
    renderPayment();
  }
}

function addHostel() {
  if (hostelCount < data.hostelDue.length) {
    hostelCount++;
    renderPayment();
  }
}

function removeHostel() {
  if (hostelCount >0) {
    hostelCount--;
    renderPayment();
  }
}
function calculateInvoice() {

  let feesTotal = 0;

  selectedTuition.forEach(item => {
    feesTotal += item[1];
  });

  selectedHostel.forEach(item => {
    feesTotal += item[1];
  });

  const processingFee =
    Math.round(feesTotal * 0.02);

  const gstFee =
    Math.round(processingFee * 0.18);

  const gatewayFee =
    processingFee + gstFee;

  const totalToPay =
    feesTotal + gatewayFee;

  return {
    feesTotal,
    processingFee,
    gstFee,
    gatewayFee,
    totalToPay
  };
}
