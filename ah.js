
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".carousel-slides");
  const dots = document.querySelectorAll(".carousel-dot");

  currentSlide = (index + dots.length) % dots.length; // Loop slides
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

function autoSlide() {
  showSlide(currentSlide + 1);
}

function setCurrentSlide(index) {
  showSlide(index);
}




// Initialize
window.onload = () => {
  showSlide(0);
  setInterval(autoSlide, 3000); // Change every 3 seconds
};
