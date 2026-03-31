document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const infoItems = document.querySelectorAll('.info-item');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    const button = contactForm.querySelector('.btn-submit');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;

    setTimeout(() => {
      showMessage('Thank you for your message! We will get back to you soon.', 'success');
      contactForm.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 1500);
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;

    setTimeout(() => {
      formMessage.className = 'form-message';
      formMessage.style.display = 'none';
    }, 5000);
  }

  infoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';

    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, index * 100);
  });

  const formInputs = contactForm.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
