const buttons = document.querySelectorAll(".buttons button");
const input = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const btnValue = buttons[i].textContent;
    if (btnValue === "C") {
      clearResult();
    } else if (btnValue === "=") {
      calculateResult();
    } else {
      appendValue(btnValue);
    }
  });
}

function clearResult() {
  input.value = " ";
}

function calculateResult() {
  input.value = eval(input.value);
}

function appendValue(btnValue) {
  input.value += btnValue;
}
