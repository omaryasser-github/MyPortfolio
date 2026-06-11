/* =============================================
   PORTFOLIO v2.0 - Main JavaScript
   Phase 6: Interactive Features & Utilities
   ============================================ */

/* =============================================
   1. MOBILE MENU TOGGLE
   ============================================ */

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle?.addEventListener('click', () => {
  navbar?.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar?.classList.remove('active');
    menuToggle?.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const header = document.querySelector('.site-header');
  const languageToggle = document.getElementById('languageToggle');
  const themeToggle = document.getElementById('themeToggle');
  
  // Don't close menu if clicking on language/theme toggle or header elements
  if (languageToggle?.contains(e.target) || themeToggle?.contains(e.target)) return;
  if (!header?.contains(e.target)) {
    navbar?.classList.remove('active');
    menuToggle?.classList.remove('active');
  }
});

/* =============================================
   1.5. THEME TOGGLE (LIGHT/DARK MODE)
   ============================================ */

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize theme on page load
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
};

// Set theme function
const setTheme = (theme) => {
  if (theme === 'light') {
    htmlElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
    localStorage.setItem('theme', 'dark');
  }
};

// Toggle theme on button click
themeToggle?.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Initialize theme on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initTheme);

/* =============================================
   2. ACTIVE NAV LINK ON SCROLL
   ============================================ */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });

  // Add scrolled class to header
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

/* =============================================
   3. DYNAMIC FOOTER YEAR
   ============================================ */

document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   4. SMOOTH SCROLL BEHAVIOR
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/* =============================================
   5. CV DOWNLOAD FUNCTIONALITY
   ============================================ */

const cvDownloadBtn = document.getElementById('cvDownload');
const resumeBtn = document.getElementById('resumeBtn');

const downloadCV = () => {
  // Update with actual CV file path
  window.open('../assets/files/Omar-Eldeeb.pdf' ,'_blank');
};

cvDownloadBtn?.addEventListener('click', downloadCV);
resumeBtn?.addEventListener('click', downloadCV);

/* =============================================
   6. SCROLL REVEAL ANIMATIONS
   ============================================ */

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '60px',
    duration: 800,
    delay: 100,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    reset: false
  });

  ScrollReveal().reveal('.hero-content', { origin: 'left' });
  ScrollReveal().reveal('.hero-image', { origin: 'right' });
  ScrollReveal().reveal('.about-content', { origin: 'left', delay: 100 });
  ScrollReveal().reveal('.about-features', { origin: 'right', delay: 100 });
  ScrollReveal().reveal('.focus-card', { origin: 'bottom', interval: 100 });
  ScrollReveal().reveal('.skills-card', { origin: 'bottom', interval: 100 });
  ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 150 });
  ScrollReveal().reveal('.section-header', { origin: 'top' });
}

/* =============================================
   7. LANGUAGE TOGGLE PREPARATION (Phase 7)
   ============================================ */

/* =============================================
   8. FOCUS & ACCESSIBILITY ENHANCEMENTS
   ============================================ */

// Keyboard navigation - Tab key handling
let lastKeyTime = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    lastKeyTime = Date.now();
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  if (Date.now() - lastKeyTime > 100) {
    document.body.classList.remove('keyboard-nav');
  }
});

/* =============================================
   9. REDUCED MOTION SUPPORT
   ============================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// if (prefersReducedMotion) {
//   document.documentElement.style.scrollBehavior = 'auto';
//   document.querySelectorAll('*').forEach(el => {
//     el.style.animationDuration = '0.01ms !important';
//     el.style.transitionDuration = '0.01ms !important';
//   });
// }

/* =============================================
   10. UTILITY FUNCTIONS
   ============================================ */

// // Log version info
// console.log('%c🚀 Portfolio v2.0', 'font-size: 16px; font-weight: bold; color: #22d3c5;');
// console.log('%cBuilt with precision. Deployed with confidence.', 'font-size: 12px; color: #94a3b8;');

// Performance monitoring
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('%cPage Load Time: ' + pageLoadTime + 'ms', 'color: #38bdf8;');
  });
}
