const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

password.addEventListener("input", checkPassword);

function checkPassword() {
  displayMessage();
  updateStrengthIndicator();
}

function displayMessage() {
  message.style.display = password.value.length > 0 ? "block" : "none";
}

function updateStrengthIndicator() {
  const passwordLength = password.value.length;

  if (passwordLength < 5) {
    setStrength("weak", "red");
  } else if (passwordLength >= 5 && passwordLength <= 9) {
    setStrength("medium", "orange");
  } else if (passwordLength > 9) {
    setStrength("strong", "green");
  }
}

function setStrength(text, color) {
  strength.innerText = text;
  strength.style.color = color;
  password.style.borderColor = color;
}
