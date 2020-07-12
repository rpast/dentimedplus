//TODO: switch to class toggling

// Const & Vars //
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const desktopW = 1024;

// Toggle between adding and removing the "responsive" //
// class to topnav when the user clicks on the icon //

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
};

// Style toggler for navbar //
//TODO: refactor variables
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

// Gallery switcher handlers - carousel //
//TODO: Fix 'clear interval'!
//floor counter values
var slideIndex = 1; 
var slideIndexTeam = 1;

//interval functions -> used to instantiate timer 
function plusDivsInterval() {
    showDivs((slideIndex += 1), "myslides", 1, desktopW);
}
function plusDivsIntervalTeam() {
    showDivs((slideIndexTeam += 1), "myslides-team", 2, false);
}

//onclick functions
function plusDivs(n) {
    showDivs((slideIndex += n), "myslides", 1, desktopW);
    clearInterval(carouselTimer); //stop timer
}
function plusDivsTeam(n) {
    showDivs((slideIndexTeam += n), "myslides-team", 2, false);
    clearInterval(carouselTimerTeam); //stop timer
}

function showDivs(counter, className, counterFlag, maxVw) {
    //Function overview:
        //a simple gallery switcher
        //counter: a counter increment used as the item index value in the list of all elements with className
        //className: define what elements you want to grab
        //counterFlag: 1 or 2; used to reset the counter for different switcher instances
        //maxVW: int or none if you dont want to limit the switcher behavior
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); //calculate the viewport width

    var i;
    var elemList = document.getElementsByClassName(className);
    console.log('elemList length '+elemList.length)
    
    if(vw < maxVw || maxVw == false) {
        if (counter > elemList.length) { //if # of elements in the list is shorter than counter val -> reset the counter
            if (counterFlag == 1) { //1 for office gallery
                slideIndex = 1;
            } else { //2 for team gallery
                slideIndexTeam = 1
            }
        }

        //Toggle classes on list elements
        for (i = 0; i < elemList.length; i++) {
            elemList[i].classList.add('off');
            elemList[i].classList.remove('on-col-center')
        }
        if (counterFlag == 1) { //always keep counter-1 element switched on
            elemList[slideIndex - 1].classList.add('on-col-center');
        } else {
            elemList[slideIndexTeam - 1].classList.add('on-col-center');
        }
    } else { //in case vw > threshold switch on all elements from the office gallery (design specific)
        if(counterFlag == 1) {
            for (i = 0; i < elemList.length; i++) {
                elemList[i].classList.add('on-col-center');
                elemList[i].classList.remove('off')
            }
        }
    }
};

//instantiate the galleries and timers
showDivs(slideIndex, "myslides", 1, desktopW);
showDivs(slideIndexTeam, "myslides-team", 2, false);
carouselTimer = setInterval(plusDivsInterval, 6000);
carouselTimerTeam = setInterval(plusDivsIntervalTeam, 6000);

//Reload the page when viewport gets resized
window.onresize = function(){ 
    location.reload(); 
    showDivs(slideIndex, "myslides", 1, desktopW); //if vw < maxVw display all office gallery elements
}

// Smooth scroll handler //     
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
});

//Intersection observer for catching the scroll position //
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