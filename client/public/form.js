const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const tpiFormPopup = document.getElementById("tpiFormPopup");

openFormBtn.addEventListener("click", function () {
  tpiFormPopup.style.display = "block";
});

closeFormBtn.addEventListener("click", function () {
  tpiFormPopup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == tpiFormPopup) {
    tpiFormPopup.style.display = "none";
  }
});
