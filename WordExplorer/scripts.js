const inputElement = document.querySelector(".input");
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const infoTxt = document.querySelector(".info-text");
const titleEl = document.querySelector(".title");
const meaningEl = document.querySelector(".meaning");
const meaningContainer = document.querySelector(".meaning-container");
const audioEl = document.querySelector(".audio");

inputElement.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && e.target.value) {
    fetchAPI(e.target.value);
  }
});

async function fetchAPI(word) {
  //make api request and get data
  try {
    infoTxt.textContent = "Searching";

    const fullApi = `${api}${word}`;
    const response = await fetch(fullApi);
    const data = await response.json();

    if (!response.ok) {
      //catch main error
      if (response.status === 404) {
        showErrorMessage("Word not found");
      } else {
        showErrorMessage("Error in API request");
      }
      return;
    }

    inputElement.value = "";
    infoTxt.textContent = "Type a word and press enter";
    meaningContainer.style.display = "block";

    fillDataToPage(data[0]);
  } catch (error) {
    alert("Unknown error");
  }
}

function showErrorMessage(error) {
  infoTxt.textContent = error;
  meaningContainer.style.display = "none";
  inputElement.value = "";
}

function fillDataToPage(data) {
  titleEl.textContent = data.word;
  meaningEl.textContent = data.meanings[0].definitions[0].definition;
  audioEl.src = data.phonetics[0].audio;
}
