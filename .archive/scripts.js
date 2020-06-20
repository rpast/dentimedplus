var myNav = document.getElementById('nav');
var clientH = document.documentElement.clientHeight / 4;

// Style toggler for navbar
window.onscroll = function () {
    var scrolledVal1 = document.body.scrollTop;
    var scrolledVal2 = document.documentElement.scrollTop;
    
    if (scrolledVal1 >= clientH || scrolledVal2 >= clientH) {
        myNav.classList.add('navbar-colored');
        myNav.classList.remove('navbar-trans');
    } 
    else {
        myNav.classList.remove('navbar-colored');
        myNav.classList.add("navbar-trans");
    }
};

// Smooth scroll handler
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 300
});

// Carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} 