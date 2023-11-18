const timeElement = document.querySelector(".time");

function formatTimeUnit(unit) {
  return unit.toString().padStart(2, "0");
}

function updateClock() {
  //Find values
  const now = new Date();
  let hour = formatTimeUnit(now.getHours());
  let minutes = formatTimeUnit(now.getMinutes());
  let seconds = formatTimeUnit(now.getSeconds());

  //set values
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour === 0 ? 12 : hour;

  //set to user
  const formattedTime = `${hour}:${minutes}:${seconds} ${ampm}`;
  timeElement.textContent = formattedTime;

  //check time every second
  setTimeout(updateClock, 1000);
}

updateClock();
