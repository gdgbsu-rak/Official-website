/* =========================
   EVENT CAROUSEL
========================= */

const track = document.getElementById("eventTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;


if (track && nextBtn && prevBtn) {

    function updateCarousel() {

        const cards = document.querySelectorAll(".event-card");

        if (window.innerWidth <= 800) {

            track.style.transform =
                `translateX(-${currentSlide * 100}%)`;

        } else {

            track.style.transform =
                `translateX(-${currentSlide * 50}%)`;

        }

    }


    nextBtn.addEventListener("click", () => {

        const cards = document.querySelectorAll(".event-card");


        if (window.innerWidth <= 800) {

            if (currentSlide < cards.length - 1) {
                currentSlide++;
            }

        } else {

            if (currentSlide < cards.length - 2) {
                currentSlide++;
            }

        }

        updateCarousel();

    });


    prevBtn.addEventListener("click", () => {

        if (currentSlide > 0) {
            currentSlide--;
        }

        updateCarousel();

    });


    window.addEventListener("resize", updateCarousel);

}


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "70px";

        navLinks.style.right = "6%";

        navLinks.style.background = "#ffffff";

        navLinks.style.padding = "20px";

        navLinks.style.border = "1px solid #dadce0";

    }

});