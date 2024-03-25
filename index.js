const imageList = document.querySelector(".image-list");
const fileInput = document.querySelector(".files");
const dropzone = document.querySelector(".dropzone");
const showImage = document.querySelector(".image");
const imageName = document.querySelector(".name");
const successfullM = document.querySelector(".message");
const clears = document.querySelector(".clears");
const  imagese = document.querySelector(".imagese");

// ========DragEnter event=========
dropzone.addEventListener("dragenter", (e) => {
  e.preventDefault();
});

// ===========DragOver Event============
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// ============DragLeave Event==========
dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
});

// ===========Drop   Event================
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  const { files } = e.dataTransfer;
  let file = files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;
      // using sessionStorage
      sessionStorage.setItem("image", data);
    };
    reader.readAsDataURL(file);
    imageName.textContent = file.name;
    imageName.style.display = "block";
    successfullM.style.display = "block";
    setTimeout(() => {
      successfullM.style.display = "none";
    }, 2000);
  } else {
    successfullM.textContent = "please select Image.";
  }
});

//========Drag and Drop Event======
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
document.addEventListener("drop", (e) => {
  e.preventDefault();
});

// ========show data here==========
function showShow() {
    imagese.style.display = "block";
  showImage.src = sessionStorage.getItem("image");
}
setInterval(showShow, 100);
clears.addEventListener("click", () => {
  sessionStorage.clear();
  imagese.style.display = "none";
  imagese.innerHTML='<span style="color:red;">Clear successfully your session storage.</span>'
  alert('Clear successfully your session storage.')
});
