//========= DOM Store =========
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
const count = {
  tuition: 1,
  hostel: 1
};
//========= DOM Fields ID =========
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


renderBilling();
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
          ₹${fee.amount.toLocaleString("en-IN")} • ${fee.status}
        </strong>
      </div>
    `).join("")}
  </div>
`).join("");
}


renderInvoiceDetails();
 function renderInvoiceDetails() {

const selectedTuition =
  data.tuitionDue.slice(0, count.tuition);

const selectedHostel =
  data.hostelDue.slice(0, count.hostel);

  const feesTotal =     [...selectedTuition, ...selectedHostel]
      .reduce((sum, item) => sum + item[1], 0);

  const processingFee =
    Math.round(feesTotal * 0.02);

  const gstFee =
    Math.round(processingFee * 0.18);

  const gatewayFee =
    processingFee + gstFee;

const totalToPay = feesTotal + gatewayFee;

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

    <h3>Hostel Fees</h3>
    ${selectedHostel.map(item => `
      <div class="row">
        <span>${item[0]}</span>
        <strong>₹${item[1]}</strong>
      </div>
    `).join("")}
    <div class="controls">
      <button onclick="updateCount('hostel', -1)">−</button>
      <button onclick="updateCount('hostel', 1)">+</button>
    </div>
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
  const max = data[`${type}Due`].length;
  count[type] = Math.max(
    0,
    Math.min(max, count[type] + change)
  );
  renderInvoiceDetails();
}
