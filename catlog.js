document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const laptopItems = document.querySelectorAll('.laptop-item');
  const detailButtons = document.querySelectorAll('.btn-details');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      laptopItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.laptop-card');
      const laptopName = card.querySelector('h3').textContent;
      alert(`View details for ${laptopName}\n\nThis would open a detailed product page in a full application.`);
    });
  });

  laptopItems.forEach((item, index) => {
    item.style.animation = `fadeIn 0.6s ease ${index * 0.1}s both`;
  });
});

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
