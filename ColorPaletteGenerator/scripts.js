const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");
const inputVal = document.querySelector(".input-number");

refreshBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  container.innerHTML = "";

  let paletteBoxes = getInputValue();

  for (let i = 0; i < paletteBoxes; i++) {
    const randomHex = generateRandomHexColor();

    const color = createColorElement(randomHex);
    container.appendChild(color);
  }
}

function getInputValue() {
  let value = inputVal.value;
  return value <= 0 || value >= 70 ? 35 : value;
}

function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
}

function createColorElement(hexColor) {
  const color = document.createElement("li");
  color.classList.add("color");
  color.innerHTML = `
    <div class="rect-box" style="background:${hexColor}"></div>
    <span class="hex-value">${hexColor}</span>
  `;

  color.addEventListener("click", function () {
    copyColorToClipboard(hexColor);
  });

  return color;
}

function copyColorToClipboard(hexColor) {
  navigator.clipboard.writeText(hexColor);
}
