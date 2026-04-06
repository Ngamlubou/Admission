form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const sClass = document.getElementById('classSelect');
  const classText = sClass.selectedOptions[0].text;
  const classValue = sClass.value;

  try {
    const res = await fetch("https://smartpea-backend.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        classValue: classValue
      })
    });

    const data = await res.json();

    console.log("Backend response:", data);

    const ticketHTML = `
      <h3>Ticket Details</h3>
      <p><strong>Class:</strong> ${classText}</p>
      <p><strong>Code:</strong><span>Use this code for admission.</span></p>
      <h2>${data.code}</h2>
    `;
    ticketInfo.innerHTML = ticketHTML;
    ticketInfo.style.display = 'block';
  } 
});
