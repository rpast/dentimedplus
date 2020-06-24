// Toggle between adding and removing the "responsive" 
// class to topnav when the user clicks on the icon

var menu = document.querySelector("#menu-wrapper");
var nav = document.querySelector("#navbar");
var icon = document.querySelector("#menu-icon");

// Activate menu wrapper
function hamburgerToggle() {
    if(menu.classList.contains('wrapper-on')) {
        console.log('wyłączam');
        menu.classList.remove('wrapper-on');
        menu.classList.add('wrapper-off');
    } else if(menu.classList.contains('wrapper-off')) {
        console.log('włączam');
        menu.classList.remove('wrapper-off');
        menu.classList.add('wrapper-on');
    }
}

// Carousel handlers
var slideIndex = 1;
var slideIndexTeam = 1;

var carouselTimer = setInterval(plusDivsInterval, 6000);
var carouselTimerTeam = setInterval(plusDivsIntervalTeam, 6000);

showDivs(slideIndex, "myslides", 1);
showDivs(slideIndexTeam, "myslides-team", 2);

function plusDivsInterval() {
	showDivs((slideIndex += 1), "myslides", 1);
}
function plusDivsIntervalTeam() {
	showDivs((slideIndexTeam += 1), "myslides-team", 2);
}

function plusDivs(n) {
	showDivs((slideIndex += n), "myslides", 1);
	clearInterval(carouselTimer);
}
function plusDivsTeam(n) {
	showDivs((slideIndexTeam += n), "myslides-team", 2);
	clearInterval(carouselTimerTeam);
}

function showDivs(n, className, counterFlag) {
	var i;
    var x = document.getElementsByClassName(className);
	if (n > x.length) {
        if (counterFlag == 1) {
            slideIndex = 1;
        } else {
            slideIndexTeam = 1
        }
	}

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
    }
    if (counterFlag == 1) {
        x[slideIndex - 1].style.display = "flex";
    } else {
        x[slideIndexTeam - 1].style.display = "flex";
    }
}

// Style toggler for navbar
var myNav = document.querySelector(".navbar");
var myLogo = document.querySelector(".logo");
var myLinks = document.querySelector(".navbar-links")
var myCall = document.querySelector(".call-us-nav")
var myHamburger = document.querySelector("#menu-icon");

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