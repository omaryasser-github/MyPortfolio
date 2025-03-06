let MenuIcon = document.querySelector("#menu-icon") ;
let navbar = document.querySelector(".navbar");

MenuIcon.onclick=() =>{
    MenuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};


let sections = document.querySelector("section")
let navlinks = document.querySelector("header nav a")

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop -150 ;
         let height = sec.offsetHeight ;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            })
         }
    });
/* ========================= sticky navbar ======================== */
    let header = document.querySelector("header")
    header.classList.toggle("sticky" , window.scrollY > 100);

/*============================== remove toggle icon and navbar================ */
    MenuIcon.classList.remove("fa-times");
    navbar.classList.remove("active");
};

/*============================== scroll  ================ */
ScrollReveal({
    distance: '80px' ,
    duration:2000,
    dely:200,
});

ScrollReveal().reveal('.home-content , heading', { origin:'top' });
ScrollReveal().reveal('.home-img , .skills-container , .project-box , .contact form', {  origin:'buttom'});
ScrollReveal().reveal('.home-content h1', {  origin:'left'});
ScrollReveal().reveal('.home-content, .about-content , .education-container ', {  origin:'right'});


