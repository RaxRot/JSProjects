const inputEl = document.querySelector(".input");
const wordFactEl = document.querySelector(".wordFact");
const searchButton = document.querySelector(".btn");

function searchNumberFact() {
  const number = inputEl.value.trim();

  // Check if the input is a non-empty number
  if (Number.isInteger(Number(number)) && number >= 0 && number <= 100) {
    //Generate correct api
    let api = `http://numbersapi.com/${number}/?json`;
    makeApi(api);
  } else {
    alert(
      "Invalid input. Please enter a non-empty number. Also number should be from 0 to  100"
    );
  }
}

async function makeApi(api) {
  try {
    const result = await fetch(api);

    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }

    const data = await result.json();

    if (data && data.text) {
      // Show data to user
      showData(data.text);
    } else {
      throw new Error("Invalid data received from the API");
    }
  } catch (error) {
    throw new Error(`Error making API request: ${error.message}`);
  }
}

function showData(infoToShow) {
  wordFactEl.textContent = infoToShow;
}

searchButton.addEventListener("click", searchNumberFact);
