//ading vars
const sendReviewBtn = document.querySelector(".btn");
const allRatingsElements = document.querySelectorAll(".rating");
const container = document.querySelector(".container");
let selectedRating = "";

allRatingsElements.forEach((rating) => {
  rating.addEventListener("click", function (event) {
    removeAllActiveClass();

    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;

    //ading active class to change view
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

function removeAllActiveClass() {
  allRatingsElements.forEach((x) => {
    x.classList.remove("active");
  });
}

function addFeedback() {
  if (selectedRating !== "") {
    //create elemnts
    const strong1 = document.createElement("strong");
    strong1.textContent = "Thank you!";

    const br1 = document.createElement("br");

    const strong2 = document.createElement("strong");
    strong2.textContent = `Feedback: ${selectedRating}`;

    const br2 = document.createElement("br");

    const p = document.createElement("p");
    p.textContent = "We will use your feedback to improve our customer support";

    //clear container
    container.innerHTML = "";

    //add elements
    container.appendChild(strong1);
    container.appendChild(br1);
    container.appendChild(strong2);
    container.appendChild(br2);
    container.appendChild(p);
  } else {
    alert("Please choose something");
  }
}

sendReviewBtn.addEventListener("click", addFeedback);
