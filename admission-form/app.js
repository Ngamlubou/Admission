const sFile = {
  aadhar: null,
  profile: null,
  msheet: null
};
const msheetFile = document.getElementById("msheetFile");
const msheetView = document.getElementById("msheetView");

const profileFile = document.getElementById("profileFile");
const profileView = document.getElementById("profileView");

const aadharFile = document.getElementById("aadharFile");
const aadharView = document.getElementById("aadharView");

//------------
bindUpload(aadharFile, aadharView, "aadhar");
bindUpload(profileFile, profileView, "profile");
bindUpload(msheetFile, msheetView, "msheet");

function bindUpload(input, view, key) {
  input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
const compressedFile = await compressImg(file);
  const url = URL.createObjectURL(compressedFile);
 view.src = url;
 view.onload = () => {
      URL.revokeObjectURL(url);
    };
   sFile[key] = compressedFile;
  });
}
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
