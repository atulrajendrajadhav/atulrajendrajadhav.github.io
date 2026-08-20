
/* ==========================
   TYPING EFFECT
========================== */

var typed = new Typed(".typing", {
    strings: [
        "Java Developer",
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
        "Tech Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


/* ==========================
   AOS ANIMATION
========================== */

AOS.init({
    duration: 1000,
    once: true
});


/* ==========================
   DARK / LIGHT MODE
========================== */

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme","light");

    }else{

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme","dark");
    }
});


/* ==========================
   LOAD SAVED THEME
========================== */

window.addEventListener("load", () => {

    let savedTheme =
    localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");

        themeToggle.innerHTML = "☀️";
    }
});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================
   CONTACT FORM
========================== */

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Thank You! Your message has been submitted successfully."
    );

    form.reset();

});


/* ==========================
   NAVBAR ACTIVE LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");
        }

    });

});


/* ==========================
   PROJECT CARD ANIMATION
========================== */

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/* ==========================
   SMOOTH SCROLL FOR LINKS
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });
        }

    });

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"Welcome to Atul Jadhav Portfolio 🚀"
);

