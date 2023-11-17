const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

const userScoreEl = document.querySelector(".user-score");
const psScoreEl = document.querySelector(".pc-score");

let userScore = 0;
let pcScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    playRound(btn.className, computerPlay());
  });
});

function computerPlay() {
  const choises = ["rock", "paper", "scissor"];
  const randomChoise = Math.floor(Math.random() * choises.length);

  return choises[randomChoise];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    result.textContent = "You win!";
    userScore++;
  } else {
    result.textContent = "You lose!";
    pcScore++;
  }

  userScoreEl.textContent = userScore;
  psScoreEl.textContent = pcScore;
}
