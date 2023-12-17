const filterButtons = document.querySelectorAll(".filter-buttons button");
const filtarableCards = document.querySelectorAll(".filtarable-cards .card");

function filterCards(e) {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filtarableCards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
}

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);
