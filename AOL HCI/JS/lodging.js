let currentIndex = 0;
const visibleCards = 4;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalCards = slides.length;

  currentIndex = index;
  
  if (currentIndex == totalCards) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalCards - visibleCards;
  }

  const newTransform = `translateX(${-currentIndex * (100 / visibleCards)}%)`;
  document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}