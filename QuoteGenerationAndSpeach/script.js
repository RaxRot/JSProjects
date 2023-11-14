const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

const api = "https://api.quotable.io/random";

//random quote
async function randomQuote() {
  quoteBtn.innerText = "Loading Quote...";
  quoteBtn.classList.add("loading");

  const response = await fetch(api);
  const data = await response.json();

  quoteText.innerText = data.content;
  authorName.innerText = data.author;
  quoteBtn.innerText = "New Quote";
  quoteBtn.classList.remove("loading");
}

function makeSound() {
  //web api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); //speak meyhod
}

function copyQuote() {
  //copy text -writetext writes text to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
}

function sendToTwitter() {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} --${authorName.innerText}--`;
  window.open(tweetUrl, "_blank");
}

quoteBtn.addEventListener("click", randomQuote);
soundBtn.addEventListener("click", makeSound);
copyBtn.addEventListener("click", copyQuote);
twitterBtn.addEventListener("click", sendToTwitter);
