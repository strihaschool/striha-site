// main.js

// FAQ аккордеон
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    // Закриваємо усі відповіді
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    // Відкриваємо потрібну відповідь
    const answer = btn.nextElementSibling;
    answer.style.display = 'block';
  });
});

// Ініціалізація Glide.js для комікс-каруселі (#stories)
new Glide('#mascotCarousel', {
  type: 'carousel',
  autoplay: 5000,
  hoverpause: true,
  perView: 3,
  breakpoints: {
    768: { perView: 2 },
    480: { perView: 1 }
  }
}).mount();

// Ініціалізація Glide.js для відгуків (#reviews)
new Glide('#reviewsCarousel', {
  type: 'carousel',
  autoplay: 6000,
  hoverpause: true,
  perView: 1
}).mount();

// Приклад плавного скролу до блоку
document.getElementById('btn-trial').addEventListener('click', function(e) {
  e.preventDefault();
  const pricingSection = document.querySelector('#pricing');
  if (pricingSection) {
    pricingSection.style.display = 'block';  // Якщо тарифний блок приховано, робимо його видимим
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
});
