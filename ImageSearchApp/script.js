const accessKey = "d0j-MQEXM6w7Z91ZrfPAUHdyxIAOB1iNiOcypQMizKM";

const inputSearch = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const showMoreBtn = document.getElementById("show-more");
const searchResults = document.querySelector(".search-results");
const form = document.querySelector("form");

let inputData = "";
let page = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  page = 1;
});

function showAlert(message) {
  alert(message);
}

function clearSearchResults() {
  searchResults.innerHTML = "";
}

function createImageElement(url, alt) {
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  return image;
}

function createImageLink(url, alt) {
  const imageLink = document.createElement("a");
  imageLink.href = url;
  imageLink.target = "_blank";
  imageLink.textContent = alt;
  return imageLink;
}

function appendImageToResults(imageWrapper, image, imageLink) {
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(imageLink);
  searchResults.appendChild(imageWrapper);
}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getImageByApi() {
  inputData = inputSearch.value;

  if (inputData === "") {
    showAlert("Please enter a search term");
  } else {
    clearSearchResults();

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const data = await fetchData(url);
    const results = data.results;

    results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");

      const image = createImageElement(
        result.urls.small,
        result.alt_description
      );
      const imageLink = createImageLink(
        result.links.html,
        result.alt_description
      );

      appendImageToResults(imageWrapper, image, imageLink);
    });

    page++;

    if (page > 1) {
      showMoreBtn.style.display = "block";
    }

    console.log(results);
  }

  inputSearch.value = "";
}

searchBtn.addEventListener("click", getImageByApi);
showMoreBtn.addEventListener("click", getImageByApi);
