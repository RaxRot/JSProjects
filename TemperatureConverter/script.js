const celciusEl = document.querySelector(".celcius");
const fahrenheitEl = document.querySelector(".fahrenheit");

function updateFahrenheit() {
  fahrenheitEl.value = ((parseFloat(celciusEl.value) * 9) / 5 + 32).toFixed(2);
}

function updateCelcius() {
  celciusEl.value = ((parseFloat(fahrenheitEl.value) - 32) / 1.8).toFixed(2);
}

celciusEl.value = "0";
updateFahrenheit();

celciusEl.addEventListener("input", updateFahrenheit);
fahrenheitEl.addEventListener("input", updateCelcius);
