const popup = document.getElementById("popup");
const submitButton = document.getElementById("submitButton");
const okButton = document.getElementById("okButton");

function openPopUp() {
  popup.classList.add("open-popup");
}

function closePopUp() {
  popup.classList.remove("open-popup");
}

submitButton.addEventListener("click", openPopUp);
okButton.addEventListener("click", closePopUp);
