let MenuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

MenuIcon.onclick = () => {
  MenuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
      })
    }
  });
  /* ========================= sticky navbar ======================== */
  let header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 100);

  /*============================== remove toggle icon and navbar================ */
  MenuIcon.classList.remove("fa-times");
  navbar.classList.remove("active");
};

/*============================== scroll  ================ */
ScrollReveal({
  distance: '80px',
  duration: 2000,
  dely: 200,
});

ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .skills-container , .project-box , .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content, .about-content , .education-container ', { origin: 'right' });


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
    // لو حابب تبعته فعليًا:
    // form.submit();
  }
});





