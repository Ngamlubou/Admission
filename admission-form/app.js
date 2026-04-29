const aadharFile = document.getElementById("aadharFile");
const preview = document.getElementById("preview");

aadharFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
const url = URL.createObjectURL(file);
preview.src = url;
preview.onload = () => {
URL.revokeObjectURL(url); };  }
});
