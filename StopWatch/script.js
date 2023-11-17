const mytimer = document.querySelector(".timer");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    mytimer.textContent = formatTime(elapsedTime);
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function formatTime(elapsedTime) {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds)
  );
}

function stopTimer() {
  clearInterval(timerInterval);

  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);

  mytimer.textContent = "00:00:00";
  elapsedTime = 0;
  startBtn.disabled = false;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
