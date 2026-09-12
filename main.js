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

// Contact form — submits via FormSubmit.co (free, no signup needed)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  note.textContent = 'Sending your request...';
  note.style.color = 'var(--accent)';

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('company', company);
  formData.append('message', message);
  formData.append('_subject', 'Consultation Request from ' + name);
  formData.append('_template', 'table');

  fetch('https://formsubmit.co/helloniavexa@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if (res.ok) {
      note.textContent = '✓ Request sent! We\'ll get back to you within 24 hours.';
      form.reset();
    } else {
      throw new Error('Failed');
    }
  })
  .catch(() => {
    note.textContent = 'Something went wrong. Please email helloniavexa@gmail.com directly.';
    note.style.color = 'var(--accent)';
  });
});
