const starsEl = document.querySelectorAll(".fa-star");
const emejisEl = document.querySelectorAll(".far");
emejisEl[0].style.backgroundColor = "red";

starsEl.forEach((star, index) => {
  star.addEventListener("click", function () {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emejisEl.forEach((emoji) => {
    emoji.style.transform = `translateX(-${index * 50}px)`;

    switch (index) {
      case 0:
        emoji.style.backgroundColor = "red";
        break;
      case 1:
        emoji.style.backgroundColor = "orange";
        break;
      case 2:
        emoji.style.backgroundColor = "yellow";
        break;
      case 3:
        emoji.style.backgroundColor = "green";
        break;
      case 4:
        emoji.style.backgroundColor = "green";
        break;
      default:
        break;
    }
  });
}
