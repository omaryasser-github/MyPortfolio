# MyPortfolio 🚀

A modern, responsive, and bilingual portfolio website showcasing professional experience, skills, projects, and expertise as a Full-Stack Developer.

**Live Demo:** [Visit Portfolio](https://my-portfolio-sigma-orcin.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment & Security](#deployment--security)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Overview

**MyPortfolio** is a sophisticated, professional portfolio website built to showcase Omar Yasser's expertise as a Full-Stack Developer. The website features a clean, modern design with seamless navigation, multi-language support (English & Arabic), and responsive layouts across all devices.

The project demonstrates professional development practices including:
- Version control with semantic versioning
- Secure CI/CD deployment pipeline
- Production-ready architecture
- Best practices for frontend development

---

## Features

✨ **Core Features:**
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices
- **Multi-Language Support** – Seamlessly toggle between English and Arabic (RTL support)
- **Smooth Animations** – Scroll reveal effects using ScrollReveal library
- **Interactive Navigation** – Sticky header with active section highlighting
- **Professional Sections:**
  - Home with quick introduction and social links
  - About section with professional summary
  - Education and academic background
  - Technical and soft skills (collapsible)
  - Project portfolio with GitHub links
  - Contact information
- **PDF Export** – Download CV with a single click
- **SEO Optimized** – Proper meta tags and semantic HTML
- **Font Awesome Icons** – Beautiful iconography throughout

---

## Tech Stack

### Frontend
- **HTML5** – Semantic markup structure
- **CSS3** – Modern styling with media queries for responsiveness
- **JavaScript (ES6+)** – Interactive functionality and DOM manipulation
- **ScrollReveal.js** – Scroll animation effects

### Deployment & CI/CD
- **Vercel** – Hosting and edge functions platform
- **GitHub Actions** – Automated deployment pipeline
- **Git & Semantic Versioning** – Version control with tag-based releases

### Build Tools & Services
- **Vercel CLI** – Build and deployment automation
- **GitHub Secrets** – Secure environment variable management

---

## Project Structure

```
MyPortfolio/
├── .github/
│   └── workflows/
│       └── deploy-tag.yml          # GitHub Actions CI/CD pipeline
├── MyPortflio2/
│   ├── index.html                  # Main HTML file
│   ├── main.js                     # Core JavaScript functionality
│   ├── stylesheet.css              # Primary styles
│   ├── mediaquery.css              # Responsive design styles
│   ├── translation_ar.js           # Arabic language translations
│   ├── .env.local                  # Local environment variables
│   ├── Omaryasser_CV_2025.pdf      # CV document
│   └── src image/                  # Image assets
├── project-assests/                # Additional project resources
├── vercel.json                     # Vercel deployment configuration
├── README.md                       # This file
└── .gitignore                      # Git ignore rules
```

---

## Getting Started

### Prerequisites
- Node.js 14+ (for local development server)
- Git for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omaryasser-github/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Navigate to the project directory:**
   ```bash
   cd MyPortflio2
   ```

3. **Start a local development server:**
   ```bash
   # using Node.js with http-server
   npx http-server
   ```

4. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## Usage

### Navigation
- Use the navigation bar to jump between sections (Home, About, Education, Skills, Projects, Contact)
- Mobile menu toggle available for smaller screens
- Active section is highlighted in the navigation

### Language Toggle
- Click the language selector dropdown in the header (En/Ar)
- Website content switches between English and Arabic
- RTL (Right-to-Left) layout automatically applied for Arabic

### Download CV
- Click the "Download CV" button in the Home section
- PDF opens in a new tab or downloads to your device

### Responsive Behavior
- Website automatically adapts to different screen sizes
- Hamburger menu appears on tablets and mobile devices
- Images and content reflow for optimal viewing

---

## Deployment & Security

### 🔐 Production Release Strategy

Our deployment approach prioritizes **security**, **stability**, and **control** over production environments.

#### 1. **Tag-Based Releases** 🏷️
- **Production deployments are triggered exclusively by semantic version tags** (e.g., `v1.0.0`, `v1.2.3`)
- Only stable, tested code is tagged for release
- Prevents accidental production deployments from unfinished or untested code
- Maintains clear version history in Git

### Security Best Practices Implemented ✅
- ✅ No hardcoded secrets in code or configuration files
- ✅ Manual release approval via tagged commits
- ✅ Automated CI/CD pipeline with authentication
- ✅ Production environment protected from accidental deployments
- ✅ Clear audit trail via Git tags and GitHub Actions logs

---

## Contributing

Contributions are welcome! However, as this is a personal portfolio, major changes should be discussed first.

### Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Contact

**Omar Yasser** – Full-Stack Developer

- 📧 **Email:** [omareldeeb2003.dev@gmail.com](mailto:omareldeeb2003.dev@gmail.com)
- 💼 **LinkedIn:** [Omar Yasser](https://www.linkedin.com/in/omar-yasser-4098282a3)
- 🐙 **GitHub:** [@omaryasser-github](https://github.com/omaryasser-github)
- 📱 **Facebook:** [Omar Yasser](https://www.facebook.com/profile.php?id=100014501057917)

---

## License

This project is proprietary and belongs to Omar Yasser. Unauthorized copying or distribution is not permitted.

---

## Acknowledgments

- **ScrollReveal.js** – For smooth scroll animations
- **Font Awesome** – For beautiful iconography
- **Vercel** – For reliable hosting and deployment platform
- **GitHub Actions** – For CI/CD automation

---

**Built with ❤️ by Omar Yasser**