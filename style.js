var navLinks=document.getElementById("navLinks");
    function showMenu()
    {
        navLinks.style.right="0";
    }
    function hideMenu()
    {
        navLinks.style.right= "-200px";
    }

let currentSlide = 0;
    function showSlide(index) {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
        });
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }
        function changeSlide(step) {
        showSlide(currentSlide + step);
}