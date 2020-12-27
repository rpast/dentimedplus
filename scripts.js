//TODO: switch to class toggling

// Const & Vars //
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const desktopW = 1024;

// Toggle between adding and removing the "responsive" //
// class to topnav when the user clicks on the icon //

var menu = document.querySelector(".menu");
var body = document.getElementsByTagName('body')

var cardWrapper = document.querySelector("#services-card-wrapper")

var profilaktyka = document.querySelector("#profilaktyka")
var endodoncja = document.querySelector("#endodoncja")
var ortodoncja = document.querySelector("#ortodoncja")
var estetyczna = document.querySelector("#estetyczna")
var korony = document.querySelector("#korony")
var chirurgia = document.querySelector("#chirurgia")

var servicesList = [profilaktyka, endodoncja, ortodoncja, estetyczna, korony, chirurgia]

function switcher(element, state, onState, offState) {
    //selected element gets switched. state = 1 switch-on, = 0 switch off.
    if(state == 0) {
        element.classList.remove(onState);
        element.classList.add(offState);
    } else if(state == 1) {
        element.classList.remove(offState);
        element.classList.add(onState);
    }
}

// Activate menu wrapper
//TODO: refactor with toggle() function
function toggle(elem) {
    if(elem == 'hamburger') {
        //if menu is visible
        if(menu.classList.contains('is-menu')) {
            menu.classList.remove('is-menu');
            menu.classList.add('is-off');
            myNav.classList.remove('is-off');
            myNav.classList.add('is-nav');
        //if menu is hidden
        } else if(menu.classList.contains('is-off')) {
            menu.classList.remove('is-off');
            menu.classList.add('is-menu');
            myNav.classList.remove('is-nav');
            myNav.classList.add('is-off');
        }
    } else { 
        //Set behavior to close service object
        if(element.classList.contains('on-row-start')) {
            switcher(cardWrapper, 0, 'on-row-start', 'off');
            switcher(element, 0, 'on-row-start', 'off');
        } else {
            //Switch off all the active objects in the DOM
            for(i=0; i<servicesList.length; i++) {
                var item = servicesList[i];
                switcher(item, 0, 'on-row-start', 'off');
            }
            //Switch on element
            switcher(cardWrapper, 1, 'on-row-start', 'off');
            switcher(element, 1, 'on-row-start', 'off');
        }
    }
};

// Style toggler for navbar //
//TODO: refactor variables
var myNav = document.querySelector(".nav");
var myLogo = document.querySelector(".nav__logo");
var myLogoW = document.querySelector('.nav__logo-white');
var myLinks = document.querySelector(".nav__links")
var myCall = document.querySelector(".nav__tel")
var myHamburger = document.querySelector(".nav__icon__svg");

var clientH = document.documentElement.clientHeight / 15;

window.onscroll = function () {
    var scrolledVal1 = document.body.scrollTop;
    var scrolledVal2 = document.documentElement.scrollTop;

    if (scrolledVal1 >= clientH || scrolledVal2 >= clientH) {
        myNav.classList.add("is-solid");
        myNav.classList.remove("is-trans");
        myLogo.classList.add('is-flex');
        myLogo.classList.remove('is-off');
        myLogoW.classList.add('is-off');
        myLogoW.classList.remove('is-flex');
        myCall.classList.remove('is-hidden');
        myLinks.style.color = "rgb(0,0,0)";
        myHamburger.style.fill = "rgba(0,0,0,1)";
    } else {
        myNav.classList.add("is-trans");
        myNav.classList.remove("is-solid");
        myLogo.classList.remove('is-flex');
        myLogo.classList.add('is-off');
        myLogoW.classList.remove('is-off');
        myLogoW.classList.add('is-flex');
        myCall.classList.add('is-hidden');
        myLinks.style.color = "rgb(255,255,255)"
        myHamburger.style.fill = "rgba(255,255,255,1)";
    }
};

// Gallery switcher handlers - carousel //
//TODO: Fix 'clear interval'!
//floor counter values
var slideIndex = 1; 
var slideIndexTeam = 1;
var slideIndexOffice = 1;

//interval functions -> used to instantiate timer 
function plusDivsInterval() {
    showDivs((slideIndex += 1), "myslides", 1, desktopW);
}
function plusDivsIntervalTeam() {
    showDivs((slideIndexTeam += 1), "myslides-team", 2, false);
}
function plusDivsIntervalOffice() {
    showDivs((slideIndexOffice += 1), "myslides-office", 2, desktopW);
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
function plusDivsOffice(n) {
    showDivs((slideIndexOffice += n), "myslides-office", 3, desktopW);
    clearInterval(carouselTimerOffice); //stop timer
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
    //console.log('elemList length '+elemList.length)
    
    if(vw < maxVw || maxVw == false) {
        if (counter > elemList.length) { //if # of elements in the list is shorter than counter val -> reset the counter
            if (counterFlag == 1) { //1 for office gallery
                slideIndex = 1;
            } else if (counterFlag == 2) { //2 for team gallery
                slideIndexTeam = 1;
            } else { // 3 for Office gallery
                slideIndexOffice = 1;
            }
        }

        //Toggle classes on list elements
        for (i = 0; i < elemList.length; i++) {
            elemList[i].classList.add('off');
            elemList[i].classList.remove('on-col-center')
        }
        //always keep counter-1 element switched on
        if (counterFlag == 1) { 
            elemList[slideIndex - 1].classList.add('on-col-center');
        } else if (counterFlag == 2) {
            elemList[slideIndexTeam - 1].classList.add('on-col-center');
        } else {
            elemList[slideIndexOffice - 1].classList.add('on-col-center');
        }
    } else { //in case vw > threshold switch on all elements from the office gallery (design specific)
        if(counterFlag == 1 || counterFlag == 3) {
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
showDivs(slideIndexOffice, "myslides-office", 3, desktopW);

carouselTimer = setInterval(plusDivsInterval, 6000);
carouselTimerTeam = setInterval(plusDivsIntervalTeam, 6000);
carouselTimerOffice = setInterval(plusDivsIntervalOffice, 6000);

//Reload the page when viewport gets resized
window.onresize = function(){ 
    location.reload(); 
    //if vw < maxVw display all office gallery elements
    showDivs(slideIndex, "myslides", 1, desktopW);
    showDivs(slideIndexOffice, "myslides-office", 3, desktopW);
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