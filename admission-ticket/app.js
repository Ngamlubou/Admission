const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');

form.addEventListener('submit', async function(e) {  
e.preventDefault();
submitBtn.disabled = true;
const sClass = e.target.elements['classSelect'];
  const classText = sClass.selectedOptions[0].text;
  const classValue = sClass.value;

  try {  const res = await fetch("https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/create-order", {

      method: "POST", 
headers: {  "Content-Type": "application/json" }
});
  if (!res.ok) {
      throw new Error("Server not responding");  }
  const data = await res.json();

const setting = {
    key: "rzp_test_SYuOBsX5gApP7v", 
    amount: data.amount, 
    currency: "INR",
order_id: data.order_id,
  name: "Test Payment",
    description: "Admission Form",
 
handler: async function (response) {
  try {
    const verifyRes = await fetch("https://9000-firebase-backend-test-1776507287720.cluster-mwsteha33jfdowtvzffztbjcj6.cloudworkstations.dev/verify-payment", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        classValue: classValue,  
       razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature
      })
    });

    const result = await verifyRes.json();
if (!verifyRes.ok) {
  throw new Error(result.error || "Verification failed");
}
  alert("Payment Verified! Your admission form code is created.");
const ticketHTML = `
      <h3>Ticket Details</h3>
      <p><strong>Class:</strong> ${classText}</p>
      <p><strong>Code:</strong><span>Use this below code for admission.</span></p>
      <h1>${result.code}</h1>
    `;
ticketInfo.innerHTML = ticketHTML;
    ticketInfo.style.display = 'block';
  } catch (err) {
    alert("Can't connect to verify payment status");  }
},
    theme: { color: "#3399cc"    }
  };
  const rzp = new Razorpay(setting);
  rzp.on("payment.failed", function (response) {
    alert("Payment Failed!");
  });

 rzp.open();
} catch (err) {
  alert(err.message || "Something went wrong"); }
});
