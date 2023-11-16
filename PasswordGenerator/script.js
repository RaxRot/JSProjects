const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateBtn = document.querySelector(".generate-button");

let allCharacters =
  "qwertyuiop[]1234567890asdfghjkl;'zxcvbnm,./<>?:{}!@#$%^&*()";

rangeInput.addEventListener("input", function () {
  sliderNumber.textContent = rangeInput.value;

  generatePassword();
});

function generatePassword() {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumber];
  }

  passwordInput.value = newPassword;
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy");
}

function copyValue() {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt");
}

generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyValue);
