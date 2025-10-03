const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');
const slides = document.querySelectorAll('.carousel-slide');

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  indicatorsContainer.appendChild(dot);
});

const dots = indicatorsContainer.querySelectorAll('span');

carousel.addEventListener('scroll', () => {
  const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
});
