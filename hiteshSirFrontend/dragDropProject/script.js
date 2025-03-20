const imgBox = document.querySelector(".imgBox");
const whiteboxes = document.querySelectorAll(".whitebox");
const body = document.querySelector("body");

imgBox.addEventListener("dragstart", (e) => {
  console.log(e);
  e.target.classList.add("hold");
});

imgBox.addEventListener("dragend", (e) => {
  console.log(e);
});

for (let i = 0; i < whiteboxes.length; i++) {
  whiteboxes[i].addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.remove("hold");
  });
  whiteboxes[i].addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
  whiteboxes[i].addEventListener("dragleave", (e) => {
    e.preventDefault();
  });
  whiteboxes[i].addEventListener("drop", (e) => {
    e.preventDefault();
    whiteboxes[i].appendChild(imgBox);
  });
}
