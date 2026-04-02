const form = document.getElementById('admissionForm');
const ticketInfo = document.getElementById('ticketInfo');

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent reload

  // Read state
  const status = document.querySelector('input[name="status"]:checked').value;
  const selectedClass = document.getElementById('classSelect').value;

  // Build a simple ticket info
  const ticketHTML = `
    <h3>Ticket Details</h3>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Class:</strong> ${selectedClass}</p>
    <p>Thank you! Your ticket is ready.</p>
  `;

  // Show ticket in the same page
  ticketInfo.innerHTML = ticketHTML;
  ticketInfo.style.display = 'block';
});
