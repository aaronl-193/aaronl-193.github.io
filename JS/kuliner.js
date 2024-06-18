const foodSlider = document.querySelector('.food-slider');
const foodSlides = document.querySelectorAll('.food-slide');
const foodNav = document.querySelector('.food-nav');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let currentSlide = 0;

foodNav.style.display = 'flex';

next.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= foodSlides.length) {
    currentSlide = 0;
  }
  foodSlider.querySelector('.food-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
});

prev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = foodSlides.length - 1;
  }
  foodSlider.querySelector('.food-slides').style.transform = `translateX(-${currentSlide * 100}%)`;
});

// Add event listener for window resize
window.addEventListener('resize', () => {
  // Set the width of each slide to be 100% of the slider container
  foodSlides.forEach((slide) => {
    slide.style.width = `${foodSlider.clientWidth}px`;
  });

  // Reset the transform property of the slides container
  foodSlider.querySelector('.food-slides').style.transform = `translateX(0%)`;

  // Set the current slide to be the first slide
  currentSlide = 0;
});

// Initialize the width of each slide to be 100% of the slider container
window.dispatchEvent(new Event('resize'));