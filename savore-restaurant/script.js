const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.menu-card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => {
      const selected = item === filter;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    cards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
    });
  });
});

const form = document.querySelector('#booking-form');
const message = document.querySelector('.form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.className = 'form-message';
  if (!form.checkValidity()) {
    message.textContent = 'Please complete all fields to reserve your table.';
    message.classList.add('error');
    form.reportValidity();
    return;
  }
  message.textContent = 'Thank you. Your table request has been received.';
  message.classList.add('success');
  form.reset();
});

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const original = button.textContent;
    button.textContent = '✓';
    button.setAttribute('aria-label', 'Added');
    setTimeout(() => {
      button.textContent = original;
      button.setAttribute('aria-label', button.closest('.menu-card').querySelector('h3').textContent + ' added');
    }, 1000);
  });
});
