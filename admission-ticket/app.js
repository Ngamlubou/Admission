const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');

document.getElementById('payBtn').addEventListener('click', function () {
  const options = {
 key: "rzp_test_SYuOBsX5gApP7v", 
    amount: 10000, 
    currency: "INR",
    name: "Demo Payment",
    description: "Test Transaction",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
       },
    prefill: {
      name: "John Doe",
      email: "john@example.com",
      contact: "9999999999"
    },
method: {
    upi: true,
    card: false,
    netbanking: false,
    wallet: false
  },
    theme: {
      color: "#3399cc"  }
  };
const rzp = new Razorpay(options);
  rzp.open();
});

function generate3Digit() {
  return Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

const sClass = document.getElementById('classSelect');

const classText = sClass.selectedOptions[0].text;

const code = sClass.value + generate3Digit();

  const ticketHTML = `
    <h3>Ticket Details</h3>
<p><strong>Class:</strong> ${classText}</p>
    <p><strong>Code:</strong><span>Use this code for admission.</span></p>
  <h2>${code}</h2>
  `;

  ticketInfo.innerHTML = ticketHTML;
  ticketInfo.style.display = 'block';
});
