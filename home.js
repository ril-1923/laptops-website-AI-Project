document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('exploreBtn');
  const featureCards = document.querySelectorAll('.feature-card');

  exploreBtn.addEventListener('click', () => {
    window.location.href = '/catalog.html';
  });

  featureCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s both`;
  });

  const laptopIcon = document.querySelector('.laptop-icon');
  laptopIcon.addEventListener('click', () => {
    laptopIcon.style.animation = 'none';
    setTimeout(() => {
      laptopIcon.style.animation = 'pulse 2s ease-in-out infinite';
    }, 10);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
