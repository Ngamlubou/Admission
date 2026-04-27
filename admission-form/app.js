document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("codeForm");
  const codeInput = document.getElementById("codeInput");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const code = codeInput.value.trim();

    if (!code) {
      errorMsg.style.display = "block";
      return;
    }

    errorMsg.style.display = "none";

    // 👉 temporary flow (you will upgrade later)
    window.location.href = `admission.html?code=${code}`;
  });
});
