const scrollContainer = document.querySelector(".gallery");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

scrollContainer.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", function () {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", function () {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
