const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const questionEl = document.querySelector(".question");
const scoreEl = document.querySelector(".score");
const hightScoreEl = document.querySelector(".hightscore");
const remTimeEl = document.querySelector(".time");

let timeToFinish = 30;
remTimeEl.textContent = `Rem time: ${timeToFinish}`;

let num1, num2, correctAnswer;
let score = 0;
const savedHighScore = JSON.parse(localStorage.getItem("score"));
hightScoreEl.textContent = `High Score: ${savedHighScore || 0}`;

let canPlay = true;
const timer = setInterval(updateTime, 1000);

function PlayGame() {
  num1 = Math.floor(Math.random() * 9) + 1;
  num2 = Math.floor(Math.random() * 9) + 1;
  correctAnswer = num1 * num2;

  questionEl.textContent = `What is ${num1} multiplied by ${num2} ?`;
}

formEl.addEventListener("submit", (e) => {
  if (!canPlay) {
    return;
  }

  e.preventDefault();

  const userAnswer = parseInt(inputEl.value, 10);
  if (userAnswer === correctAnswer) {
    score++;
  } else {
    score -= 2;
  }

  updateLocalStorage();

  scoreEl.textContent = `Score: ${score}`;
  inputEl.value = "";
  PlayGame();
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function updateTime() {
  if (canPlay) {
    timeToFinish--;
    remTimeEl.textContent = `Rem time: ${timeToFinish}`;

    if (timeToFinish <= 0) {
      timeToFinish = 0;
      canPlay = false;

      clearInterval(timer);
      ShowFinalRes();
    }
  }
}

function ShowFinalRes() {
  if (score > savedHighScore) {
    hightScoreEl.textContent = `High Score: ${score}`;
    localStorage.setItem("score", JSON.stringify(score));
  }
  questionEl.textContent = "Game Over, thank you";
}

PlayGame();
