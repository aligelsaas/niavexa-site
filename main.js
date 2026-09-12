// NiaVexa — main.js

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form — submit via Make.com webhook
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  note.textContent = 'Sending...';
  note.style.color = 'var(--accent)';

  fetch('https://hook.us2.make.com/ye3w50op4gc4p2aw4d7h1tpzq24gjfch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, company, message })
  })
  .then(res => {
    if (res.ok) {
      note.textContent = '✓ Request sent! We\'ll get back to you within 24 hours.';
      form.reset();
    } else {
      throw new Error('Request failed');
    }
  })
  .catch(() => {
    note.textContent = 'Something went wrong. Please email helloniavexa@gmail.com directly.';
    note.style.color = 'var(--accent)';
  });
});
