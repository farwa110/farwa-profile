const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".dots");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

items.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});

function moveToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % (items.length - 2);
  updateCarousel();
}, 4000);
