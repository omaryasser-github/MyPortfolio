/* =============================================
   ARABIC TRANSLATION STRINGS
   Phase 7: Multi-language Support (Prepared)
   ============================================ */

const translations = {
  Arabic: {
    // Navigation
    navAbout: 'عن',
    navFocus: 'التركيز',
    navSkills: 'المهارات',
    navProjects: 'المشاريع',
    navContact: 'التواصل',
    
    // Hero Section
    heroGreeting: 'مرحبا، اسمي',
    heroSubtitle: 'مطور Full-Stack متخصص في Backend',
    heroDesc: 'بناء APIs آمنة وأنظمة متكاملة مع AI وتطبيقات قابلة للتوسع. متخصص في معمارية Backend وربط الفجوة بين منطق البيانات المعقد وتجارب المستخدم السلسة.',
    
    // Buttons
    btnViewProjects: 'عرض المشاريع',
    btnDownloadCV: 'تحميل السيرة الذاتية',
    btnEmailMe: 'راسلني عبر البريد',
    btnResume: 'السيرة الذاتية',
    
    // About Section
    aboutTitle: 'عني',
    aboutDesc1: 'أنا طالب هندسة برمجيات متحمس بخلفية قوية في تطوير Backend ومعمارية الأنظمة.',
    aboutDesc2: 'أتابع حاليًا درجة البكالوريوس في هندسة البرمجيات، مع نهج صارم تقنيًا يضمن كود قابل للتوسع والصيانة.',
    
    // Focus Areas
    focusTitle: 'تركيزات الهندسة',
    
    focus01Title: 'أنظمة Backend آمنة',
    focus01Desc: 'مصادقة JWT، RBAC، رموز منعشة، التحقق، تحديد المعدل، تصميم API آمن',
    
    focus02Title: 'تطبيقات مدفوعة بقاعدة البيانات',
    focus02Desc: 'PostgreSQL، MongoDB، Redis، JSONB، تصميم المخطط، الترقيم، الاستعلامات المُحسنة',
    
    focus03Title: 'منتجات متكاملة مع AI',
    focus03Desc: 'LLM APIs، LangChain، Claude API، دردشة AI، خطوط أنابيب متعددة الأنماط',
    
    focus04Title: 'تطوير جاهز للإنتاج',
    focus04Desc: 'Docker، Docker Compose، الاختبار، CI/CD، معمارية معيارية، كود قابل للصيانة',
    
    // Skills Section
    skillsTitle: 'المهارات والتقنيات',
    skillsBackend: 'Backend',
    skillsDatabases: 'قواعد البيانات والتخزين المؤقت',
    skillsAI: 'AI / LLM',
    skillsDevOps: 'DevOps',
    skillsTesting: 'الاختبار',
    skillsFrontend: 'Frontend',
    
    // Projects Section
    projectsTitle: 'المشاريع المميزة',
    
    projectHeritageHub: 'مركز التراث',
    projectHeritageSummary: 'منصة سياحية ثقافية شاملة مصممة لربط المستخدمين بمواقع التراث.',
    
    projectMediLink: 'ميديلينك',
    projectMediLinkSummary: 'منصة رعاية صحية كاملة تسهل التواصل الآمن وإدارة البيانات.',
    
    projectComplaint: 'نظام إدارة الشكاوى',
    projectComplaintSummary: 'تطبيق MERN مصمم لتبسيط الإبلاغ عن المشاكل الداخلية والقرارات.',
    
    // CTA Section
    ctaHeading: 'مهتم بالعمل معي؟',
    ctaDesc: 'أنا مفتوح لفرص Backend أو Full-Stack أو التدريب الداخلي.',
    
    // Footer
    footerTitle: 'عمر الديب',
    footerDesc: 'مطور متخصص في Backend Full-Stack',
    footerCopy: 'جميع الحقوق محفوظة © 2026 عمر الديب. مهندس Backend.'
  },
  
  English: {
    // Navigation
    navAbout: 'About',
    navFocus: 'Focus',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    
    // Hero Section
    heroGreeting: 'Hi, my name is',
    heroSubtitle: 'Backend-Focused Full-Stack Developer',
    heroDesc: 'Building secure APIs, AI-integrated systems, and scalable applications. Specializing in backend architecture and bridging the gap between complex data logic and seamless user experiences.',
    
    // Buttons
    btnViewProjects: 'View Projects',
    btnDownloadCV: 'Download CV',
    btnEmailMe: 'Email Me',
    btnResume: 'Resume',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDesc1: 'I\'m a highly motivated software engineering student with a strong foundation in backend development and system architecture.',
    aboutDesc2: 'Currently pursuing my B.Sc. in Software Engineering, I approach problem-solving with technical rigor that ensures scalable and maintainable code.',
    
    // Focus Areas
    focusTitle: 'Engineering Focus',
    
    focus01Title: 'Secure Backend Systems',
    focus01Desc: 'JWT auth, RBAC, refresh tokens, validation, rate limiting, secure API design',
    
    focus02Title: 'Database-Driven Applications',
    focus02Desc: 'PostgreSQL, MongoDB, Redis, JSONB, schema design, pagination, optimized queries',
    
    focus03Title: 'AI-Integrated Products',
    focus03Desc: 'LLM APIs, LangChain, Claude API, AI chat, multimodal pipelines, automation workflows',
    
    focus04Title: 'Production-Ready Development',
    focus04Desc: 'Docker, Docker Compose, testing, CI/CD, modular architecture, maintainable code',
    
    // Skills Section
    skillsTitle: 'Skills & Technologies',
    skillsBackend: 'Backend',
    skillsDatabases: 'Databases & Caching',
    skillsAI: 'AI / LLM',
    skillsDevOps: 'DevOps',
    skillsTesting: 'Testing',
    skillsFrontend: 'Frontend',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    
    projectHeritageHub: 'Heritage Hub',
    projectHeritageSummary: 'A comprehensive cultural tourism platform designed to connect users with heritage sites.',
    
    projectMediLink: 'MediLink',
    projectMediLinkSummary: 'A full-stack healthcare platform facilitating secure communication and data management.',
    
    projectComplaint: 'Complaint Management System',
    projectComplaintSummary: 'A MERN stack application designed to streamline internal issue reporting and resolution.',
    
    // CTA Section
    ctaHeading: 'Interested in working together?',
    ctaDesc: 'I am open to junior backend, full-stack, and internship opportunities.',
    
    // Footer
    footerTitle: 'Omar Eldeeb',
    footerDesc: 'Backend-Focused Full-Stack Developer',
    footerCopy: '© 2026 Omar Eldeeb. Backend Engineer. All Rights Reserved.'
  }
};

// Function to change language
function setLanguage(lang) {
  const currentLang = translations[lang] || translations.English;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (currentLang[key]) {
      element.textContent = currentLang[key];
    }
  });
  
  // Update document language and direction
  document.documentElement.lang = lang === 'Arabic' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'Arabic' ? 'rtl' : 'ltr';
  
  // Update language toggle button text
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.textContent = lang === 'Arabic' ? 'EN' : 'AR';
  }
  
  // Save language preference
  localStorage.setItem('language', lang);
}

// Toggle language function
function toggleLanguage() {
  const currentLang = document.documentElement.lang === 'ar' ? 'Arabic' : 'English';
  const newLang = currentLang === 'Arabic' ? 'English' : 'Arabic';
  setLanguage(newLang);
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('language') || 'English';
  setLanguage(savedLanguage);
  
  // Attach toggle event listener
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }
});

// Make functions available globally
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
