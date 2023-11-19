const calculateButton = document.querySelector(".calcBtn");
const userInput = document.querySelector(".date");
//prevent of checking more date than today
userInput.max = new Date().toISOString().split("T")[0];

const reslutEl = document.querySelector(".result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    const daysInLastMonth = new Date(y2, m2 - 1, 0).getDate(); // Days in the last month
    d3 = daysInLastMonth + d2 - d1;
  }

  reslutEl.innerHTML = `Age: <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days`;
}

calculateButton.addEventListener("click", calculateAge);
