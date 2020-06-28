//TODO: switch to class toggling

// Const & Vars
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const desktopW = 1024;

// Toggle between adding and removing the "responsive" 
// class to topnav when the user clicks on the icon

var menu = document.querySelector("#menu-wrapper");
var nav = document.querySelector("#navbar");
var icon = document.querySelector("#menu-icon");

// Activate menu wrapper
function hamburgerToggle() {
    //if menu is visible
    if(menu.classList.contains('wrapper-on')) {
        menu.classList.remove('wrapper-on');
        menu.classList.add('wrapper-off');
        nav.classList.remove('navbar-off');
        nav.classList.add('navbar-on');
        icon.classList.remove('hamburger-off');
        icon.classList.add('hamburger-on');
    //if menu is hidden
    } else if(menu.classList.contains('wrapper-off')) {
        menu.classList.remove('wrapper-off');
        menu.classList.add('wrapper-on');
        nav.classList.remove('navbar-on');
        nav.classList.add('navbar-off');
        icon.classList.remove('hamburger-on');
        icon.classList.add('hamburger-off');
    }
}

// Carousel handlers
var slideIndex = 1;
var slideIndexTeam = 1;

var carouselTimer = setInterval(plusDivsInterval, 6000);
var carouselTimerTeam = setInterval(plusDivsIntervalTeam, 6000);

showDivs(slideIndex, "myslides", 1, desktopW);
showDivs(slideIndexTeam, "myslides-team", 2, false);

function plusDivsInterval() {
	showDivs((slideIndex += 1), "myslides", 1, desktopW);
}
function plusDivsIntervalTeam() {
	showDivs((slideIndexTeam += 1), "myslides-team", 2, false);
}

function plusDivs(n) {
	showDivs((slideIndex += n), "myslides", 1, desktopW);
	clearInterval(carouselTimer);
}
function plusDivsTeam(n) {
	showDivs((slideIndexTeam += n), "myslides-team", 2, false);
	clearInterval(carouselTimerTeam);
}

function showDivs(n, className, counterFlag, maxVw) {
    //a simple picture switcher
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(vw)
    if(vw < maxVw || maxVw == false) {    
        var i;
        var x = document.getElementsByClassName(className);
        if (n > x.length) { //if x
            if (counterFlag == 1) {
                slideIndex = 1;
            } else {
                slideIndexTeam = 1
            }
        }

        for (i = 0; i < x.length; i++) {
            x[i].classList.add('off');
            x[i].classList.remove('on')
        }
        if (counterFlag == 1) {
            x[slideIndex - 1].classList.add('on');
        } else {
            x[slideIndexTeam - 1].classList.add('on');
        }
    } 
}

// Style toggler for navbar
var myNav = document.querySelector(".navbar");
var myLogo = document.querySelector(".logo");
var myLinks = document.querySelector(".navbar-links")
var myCall = document.querySelector(".call-us-nav")
var myHamburger = document.querySelector("#ham-icon");

var clientH = document.documentElement.clientHeight / 15;

window.onscroll = function () {
    var scrolledVal1 = document.body.scrollTop;
    var scrolledVal2 = document.documentElement.scrollTop;

    if (scrolledVal1 >= clientH || scrolledVal2 >= clientH) {
        myNav.classList.add("navbar-solid");
        myNav.classList.remove("navbar-transparent");
        myLogo.style.display = "flex";
        myCall.style.visibility = "visible";
        this.myLinks.style.color = "rgb(0,0,0)";
        myHamburger.style.fill = "rgba(0,0,0,1)";
    } else {
        myNav.classList.add("navbar-transparent");
        myNav.classList.remove("navbar-solid");
        myLogo.style.display = "none";
        myCall.style.visibility = "hidden";
        this.myLinks.style.color = "rgb(255,255,255)"
        myHamburger.style.fill = "rgba(255,255,255,1)";
    }
};

// Smooth scroll handler
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
});

//Intersection observer for catching the scroll position
//TODO: implement intersection observer for lazy imgs and nav styling
//set empty containers to observe at the begining and the end of
//services section
const servicesSection = document.querySelector("#services");
const options = { 
    root: null,
    threshold: 0.9,
    rootMargin: "1px" //>50% doesnt work, find a way to convert vh to pixels
};

const io = new IntersectionObserver(function(entries, io) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { //react only when intersecting with element
            return;
        }
        console.log(entry.target);
    });
}, options);

io.observe(servicesSection);