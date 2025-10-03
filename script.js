const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');
const totalSlides = document.querySelectorAll('.carousel-slide').length;

// Create indicators
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  indicatorsContainer.appendChild(dot);
}

const dots = indicatorsContainer.querySelectorAll('span');

// Update indicators on scroll
carousel.addEventListener('scroll', () => {
  const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
});
