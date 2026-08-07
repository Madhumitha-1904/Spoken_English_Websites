/*=========================================
 SpeakPro English Academy
 script.js
=========================================*/

// ===========================
// Scroll to Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===========================
// Sticky Navbar
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});


// ===========================
// Animated Counter
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===========================
// Smooth Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===========================
// Active Navigation Link
// ===========================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ===========================
// Newsletter Validation
// ===========================

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {

            alert("Please enter your email address.");

        }

        else if (!pattern.test(email)) {

            alert("Please enter a valid email address.");

        }

        else {

            alert("Thank you for subscribing!");

            newsletterForm.reset();

        }

    });

}


// ===========================
// Hero Button Animation
// ===========================

const buttons = document.querySelectorAll(".hero-btn, .hero-btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


// ===========================
// Gallery Hover Effect
// ===========================

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(image => {

    image.addEventListener("mouseover", function () {

        this.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseout", function () {

        this.style.transform = "scale(1)";

    });

});


// ===========================
// Course Card Hover
// ===========================

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


// ===========================
// Loading Animation
// ===========================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


// ===========================
// Current Year in Footer
// ===========================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} SpeakPro English Academy | All Rights Reserved.`;

}


// ===========================
// Console Message
// ===========================

console.log("SpeakPro English Academy Website Loaded Successfully!");