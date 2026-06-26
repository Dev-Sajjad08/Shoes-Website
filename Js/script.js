const heroSwiper = document.querySelector('.heroSwiper');

if (heroSwiper) {

    const swiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.hero-btn-next',
            prevEl: '.hero-btn-prev'
        }
    });

    const pauseBtn = document.querySelector('.hero-btn-pause');
    const pauseIcon = document.querySelector('.pause-icon');
    const playIcon = document.querySelector('.play-icon');

    let paused = false;

    pauseBtn.addEventListener('click', () => {
        if (!paused) {
            swiper.autoplay.stop();
            pauseIcon.style.display = "none";
            playIcon.style.display = "inline";
            paused = true;
        } else {
            swiper.autoplay.start();
            pauseIcon.style.display = "inline";
            playIcon.style.display = "none";
            paused = false;
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {

    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        let href = link.getAttribute("href");

        if (!href || href === "#") return;

        let linkPage = href
            .split("/")
            .pop()
            .toLowerCase();

        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            alert("Please fill all fields correctly.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}


if (pauseBtn) {
    let paused = false

    pauseBtn.addEventListener('click', () => {

        if (!paused) {
            swiper.autoplay.stop()
            pauseIcon.style.display = "none"
            playIcon.style.display = "inline"
            paused = true
        } else {
            swiper.autoplay.start()
            pauseIcon.style.display = "inline"
            playIcon.style.display = "none"
            paused = false
        }

    })
}