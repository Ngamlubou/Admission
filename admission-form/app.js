const img = document.createElement("img");
img.src = URL.createObjectURL(file);

const aadharFile = document.getElementById("aadharFile");
const preview = document.getElementById("preview");

aadharFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});
