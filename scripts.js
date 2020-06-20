// Toggle between adding and removing the "responsive" 
// class to topnav when the user clicks on the icon

var menu = document.querySelector("#wrapper");
var nav = document.querySelector("#navbar");
var icon = document.querySelector("#menu-icon");

// Activate menu wrapper
function hamburgerToggle() {
	console.log(menu.style.visibility);
	if (menu.style.display == "") {
		menu.style.display = "flex";
		nav.style.display = "none";
	} else if (menu.style.display == "flex") {
		menu.style.display = "";
		nav.style.display = "flex";
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
var myNav = document.querySelector("#navbar");
var myLogo = document.querySelector(".logo");
var myLinks = document.querySelector(".navbar-links")
var myCall = document.querySelector(".call-us-nav")
var myHamburger = document.querySelector("#menu-icon");
var clientH = document.documentElement.clientHeight / 15;

window.onscroll = function () {
	var scrolledVal1 = document.body.scrollTop;
	var scrolledVal2 = document.documentElement.scrollTop;

	if (scrolledVal1 >= clientH || scrolledVal2 >= clientH) {
		myNav.style.backgroundColor = "rgba(255,255,255,1)";
		myNav.style.boxShadow = "0px 3px 10px 0px rgba(0, 0, 0, .5)";
		myNav.style.justifyContent = "space-evenly";
		myLogo.style.display = "flex";
		myCall.style.visibility = "visible";
		this.myLinks.style.color = "rgb(0,0,0)";
		myHamburger.style.fill = "rgba(0,0,0,1)";
	} else {
		myNav.style.backgroundColor = "rgba(255,255,255,0)";
		myNav.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
		myNav.style.justifyContent = "center";
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
