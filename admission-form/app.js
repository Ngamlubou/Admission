const aadharFile = document.getElementById("aadharFile");
const preview = document.getElementById("preview");

aadharFile.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const compressedFile = await compressImg(file);
  const url = URL.createObjectURL(compressedFile);
    preview.src = url;
  preview.onload = () => {
    URL.revokeObjectURL(url);
  };
  window.finalFile = compressedFile;
});
//========= Utility Function  =========
async function compressImg(file, maxWidth = 720, quality = 0.6) {
  if (file.size < 300 * 1024) return file; 
const img = new Image();
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = (e) => (img.src = e.target.result);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
    const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob], file.name, {
            type: "image/jpeg",
          }));
        },
        "image/jpeg",
        quality
      );
    };
    reader.readAsDataURL(file);
  });
      }
