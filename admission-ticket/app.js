const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');

function generate3Digit() {
  return Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const status = document.querySelector('input[name="status"]:checked').value;

const sClass = document.getElementById('classSelect');

const classText = sClass.selectedOptions[0].text;

const statusLetter = status === "newcomer" ? "N" : "C";

const code = statusLetter + sClass.value + generate3Digit();

  const ticketHTML = `
    <h3>Ticket Details</h3>
    <p><strong>Status:</strong> ${statusLetter}</p>
<p><strong>Class:</strong> ${classText}</p>
    <p><strong>Code:</strong></p>
  <h2>${code}</h2>
    <p>Use this code for admission.</p>
  `;

  ticketInfo.innerHTML = ticketHTML;
  ticketInfo.style.display = 'block';
});
