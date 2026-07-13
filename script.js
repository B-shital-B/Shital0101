// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (light/dark)
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

function applyTheme(mode) {
  if (mode === 'light') {
    htmlEl.classList.add('light-mode');
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    htmlEl.classList.remove('light-mode');
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const isLight = htmlEl.classList.contains('light-mode');
  const newMode = isLight ? 'dark' : 'light';
  applyTheme(newMode);
  localStorage.setItem('portfolio-theme', newMode);
});

// Navbar shadow on scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Collapse mobile menu after clicking a link
document.querySelectorAll('#navMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      new bootstrap.Collapse(menu).hide();
    }
  });
});

// Reveal-on-scroll for cards
const revealTargets = document.querySelectorAll(
  '.fact-card, .skill-card, .project-card, .timeline-item'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// Contact form (front-end only — no backend wired up)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = "Thanks! This form isn't connected to email yet — reach out directly for now.";
  contactForm.reset();
});