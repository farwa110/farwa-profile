document.addEventListener("DOMContentLoaded", function () {
  function initCarousel(carouselId, dotsId) {
    const carousel = document.querySelector(`#${carouselId}`);
    const dotsContainer = document.querySelector(`#${dotsId}`);
    const items = carousel.children;
    let currentIndex = 0;
    let interval;

    // Create dots dynamically
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);

      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
        resetInterval();
      });
    }

    function updateCarousel() {
      Array.from(items).forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
      });

      document.querySelectorAll(`#${dotsId} .dot`).forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 10000); // Change slide every 8 seconds
    }

    function resetInterval() {
      clearInterval(interval);
      startAutoSlide();
    }

    updateCarousel();
    startAutoSlide();
  }

  // Initialize both carousels
  initCarousel("projects-carousel", "projects-dots");
  initCarousel("uxui-carousel", "uxui-dots");
});

const form = document.querySelector("#contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch("https://formspree.io/f/mreajbwa", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (res.ok) {
    window.location.href = "/thankyou.html";
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
});
