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
  
  // Don't close menu if clicking on language toggle or header elements
  if (languageToggle?.contains(e.target)) return;
  if (!header?.contains(e.target)) {
    navbar?.classList.remove('active');
    menuToggle?.classList.remove('active');
  }
});

/* =============================================
   2. ACTIVE NAV LINK ON SCROLL
   ============================================ */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
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
  window.open('./Omaryasser_CV_2025.pdf', '_blank');
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

if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
  document.querySelectorAll('*').forEach(el => {
    el.style.animationDuration = '0.01ms !important';
    el.style.transitionDuration = '0.01ms !important';
  });
}

/* =============================================
   10. UTILITY FUNCTIONS
   ============================================ */

// Log version info
console.log('%c🚀 Portfolio v2.0', 'font-size: 16px; font-weight: bold; color: #22d3c5;');
console.log('%cBuilt with precision. Deployed with confidence.', 'font-size: 12px; color: #94a3b8;');

// Performance monitoring
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('%cPage Load Time: ' + pageLoadTime + 'ms', 'color: #38bdf8;');
  });
}



/* ===================== Dropdwonlist for Skills ===================== */
function toggleDropdown(header) {
  const skillsBox = header.parentElement;
  const list = skillsBox.querySelector('.skills-list');
  const icon = header.querySelector('.dropdown-icon');

  list.style.display = list.style.display === 'grid' ? 'none' : 'grid';
  icon.style.transform = list.style.display === 'grid' ? 'rotate(180deg)' : 'rotate(0)';
}


/*===================== Contact-us action validation ==============  */

const mobileInput = document.getElementById("mobile");

mobileInput.addEventListener("input", function () {
  // امسح أي حروف مش أرقام
  let onlyNums = this.value.replace(/[^0-9]/g, '');

  // اقص القيمة عند 11 رقم بس
  if (onlyNums.length > 11) {
    onlyNums = onlyNums.slice(0, 11);
  }

  // رجّع النتيجة داخل الـ input
  this.value = onlyNums;
});
const form = document.getElementById("contact");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // يمنع الإرسال مؤقتًا لو في أخطاء

  let isValid = true;

  // إعداد الـ inputs وقواعد التحقق
  const fields = [
    {
      el: document.getElementById("fullName"),
      validate: (v) => v.trim().length >= 4,
      message: "Full name must be at least 4 characters.",
    },
    {
      el: document.getElementById("email"),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: "Enter a valid email address.",
    },
    {
      el: document.getElementById("mobile"),
      validate: (v) => /^[0-9]{11}$/.test(v.trim()),
      message: "Mobile number must be exactly 11 digits.",
    },
  ];

  fields.forEach(({ el, validate, message }) => {
    const value = el.value;
    const errorEl = el.nextElementSibling;

    if (!validate(value)) {
      el.classList.add("error");
      errorEl.textContent = message;
      isValid = false;
    } else {
      el.classList.remove("error");
      errorEl.textContent = "";
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
      form.reset();
  }
});

