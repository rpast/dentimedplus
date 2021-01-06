// Const & Vars //
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const desktopW = 1440; //Large screen px threshold
const tablW = 768; //Tablet px threshold




// Toggle between adding and removing the "responsive" //
// class to topnav when the user clicks on the icon //

var menu = document.querySelector(".menu");
// var menuBg = document.querySelector(".menu-bg")
var hero = document.querySelector(".hero");
var body = document.getElementsByTagName('body')[0];
var html = document.getElementsByTagName('html')[0];

var cardWrapper = document.querySelector("#services__wr__card")

var profilaktyka = document.querySelector("#profilaktyka")
var endodoncja = document.querySelector("#endodoncja")
var ortodoncja = document.querySelector("#ortodoncja")
var estetyczna = document.querySelector("#estetyczna")
var korony = document.querySelector("#korony")
var protezy = document.querySelector("#protezy")
var chirurgia = document.querySelector("#chirurgia")
var regen = document.querySelector("#regen")

var servicesList = [profilaktyka, endodoncja, ortodoncja, estetyczna, korony, protezy, chirurgia, regen];

//Control 100% viewport height variable used in hero baner
//Grab initial variable value
var grabbedVar = getComputedStyle(hero).getPropertyValue('--computed-full-h');
//set new variable value
hero.style.setProperty('--computed-full-h', window.innerHeight+'px')

//Class switching function
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
//TODO: refactor with switcher() function
function toggle(elem) {
    if(elem == 'hamburger') {
        //if menu is visible
        if(menu.classList.contains('is-flex')) {
            menu.classList.remove('is-flex');
            menu.classList.add('is-off');
            // menuBg.classList.remove('is-flex');
            // menuBg.classList.add('is-off');
            myNav.classList.remove('is-off');
            myNav.classList.add('is-flex');
            //Allow scrolling
            body.classList.remove('is-fixed');
            html.classList.remove('is-fixed');
        //if menu is hidden
        } else if(menu.classList.contains('is-off')) {
            menu.classList.remove('is-off');
            menu.classList.add('is-flex');
            // menuBg.classList.remove('is-off');
            // menuBg.classList.add('is-flex');
            myNav.classList.remove('is-flex');
            myNav.classList.add('is-off');
            //Prevent from scrolling
            body.classList.add('is-fixed');
            html.classList.add('is-fixed');
        }
    } else { //Used for services!
        //Set behavior to close service object
        if(elem.classList.contains('is-flex')) {
            switcher(cardWrapper, 0, 'is-flex', 'is-off');
            switcher(elem, 0, 'is-flex', 'is-off');
            if(vw < 768) {
                //switch on scrolling on body element
                switcher(body, 1, 'is-scrollable', 'is-fixed')
            }
        } else {
            //Switch off all the active objects in the DOM
            for(i=0; i<servicesList.length; i++) {
                var item = servicesList[i];
                switcher(item, 0, 'is-flex', 'is-off');
            }
            //Switch on element
            switcher(cardWrapper, 1, 'is-flex', 'is-off');
            switcher(elem, 1, 'is-flex', 'is-off');
            //if screen width is smaller than tablet
            if(vw < tablW) {
                //switch off scrolling on body element to avoid double scroll
                switcher(body, 0, 'is-scrollable', 'is-fixed')
            }
        }
    }
};

// Style toggler for navbar //
var myNav = document.querySelector(".nav");
var myLogo = document.querySelector(".nav__wr__logo");
var myLogoW = document.querySelector('.nav__wr__logo-white');
var myLinks = document.querySelector(".nav__wr__links")
var myCall = document.querySelector(".nav__wr__tel__wr")
var myHamburger = document.querySelector(".nav__wr__icon__a");

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
        myLinks.classList.add("is-dark");
        myLinks.classList.remove("is-light");
        myCall.classList.remove('is-off');
        myCall.classList.add('is-flex')
        myHamburger.classList.add('is-dark');
        myHamburger.classList.remove('is-light');
    } else {
        myNav.classList.add("is-trans");
        myNav.classList.remove("is-solid");
        myLogo.classList.remove('is-flex');
        myLogo.classList.add('is-off');
        myLogoW.classList.remove('is-off');
        myLogoW.classList.add('is-flex');
        myLinks.classList.add("is-light");
        myLinks.classList.remove("is-dark");
        myCall.classList.add('is-off');
        myCall.classList.remove('is-flex');
        myHamburger.classList.add('is-light');
        myHamburger.classList.remove('is-dark');
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
    showDivs((slideIndex += 1), "about__office__slides", 1, tablW);
}
function plusDivsIntervalTeam() {
    showDivs((slideIndexTeam += 1), "about__team__wr__slides", 2, false);
}
function plusDivsIntervalOffice() {
    showDivs((slideIndexOffice += 1), "gallery__wr__slides", 3, desktopW);
}

//onclick functions
function plusDivs(n) {
    showDivs((slideIndex += n), "about__office__slides", 1, tablW);
    clearInterval(carouselTimer); //stop timer
}
function plusDivsTeam(n) {
    showDivs((slideIndexTeam += n), "about__team__wr__slides", 2, false);
    clearInterval(carouselTimerTeam); //stop timer
}
function plusDivsOffice(n) {
    showDivs((slideIndexOffice += n), "gallery__wr__slides", 3, desktopW);
    clearInterval(carouselTimerOffice); //stop timer
}


function pickMember(index) {
    //Switch on/off particular element from a list
    var i;
    var elemList = document.getElementsByClassName('about__team__wr__slides'); //catch all related elements
    clearInterval(carouselTimerTeam); //stop timer
    //Toggle classes on list elements
    for (i = 0; i < elemList.length; i++) { // Switch off all elements
        elemList[i].classList.add('is-off');
        elemList[i].classList.remove('is-flex');
    }
    elemList[index].classList.add('is-flex'); //switch on targeted element
    elemList[index].classList.remove('is-off');
    slideIndexTeam = index+1; //set team index value to be used by showDivs()
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
            elemList[i].classList.add('is-off');
            elemList[i].classList.remove('is-flex');
        }
        //always keep counter-1 element switched on
        if (counterFlag == 1) { 
            elemList[slideIndex - 1].classList.add('is-flex', 'is-col-cent');
            elemList[slideIndex - 1].classList.remove('is-off');
        } else if (counterFlag == 2) {
            elemList[slideIndexTeam - 1].classList.add('is-flex');
            elemList[slideIndexTeam - 1].classList.remove('is-off');
        } else {
            elemList[slideIndexOffice - 1].classList.add('is-flex', 'is-col-cent');
            elemList[slideIndexOffice - 1].classList.remove('is-off');
        }
    } else { //in case vw > threshold switch on all elements from the office gallery (design specific)
        if(counterFlag == 1 || counterFlag == 3) {
            for (i = 0; i < elemList.length; i++) {
                elemList[i].classList.add('is-flex');
                elemList[i].classList.remove('is-off');
                elemList[i].classList.remove('is-col-cent');
            }
        }
    }
};

//instantiate the galleries and timers
showDivs(slideIndex, "about__office__slides", 1, tablW);
showDivs(slideIndexTeam, "about__team__wr__slides", 2, false);
showDivs(slideIndexOffice, "gallery__wr__slides", 3, desktopW);

carouselTimer = setInterval(plusDivsInterval, 6000);
carouselTimerTeam = setInterval(plusDivsIntervalTeam, 6000);
carouselTimerOffice = setInterval(plusDivsIntervalOffice, 6000);

//Reload the page when viewport gets resized
window.onresize = function(){
        //location.reload(); 
        //if vw < maxVw display all office gallery elements
        showDivs(slideIndex, "about__office__slides", 1, tablW);
        showDivs(slideIndexOffice, "gallery__wr__slides", 3, desktopW);
        
}

// Smooth scroll handler //     
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
});

//Intersection observer for catching the scroll position //
//TODO: implement intersection observer for lazy imgs and nav styling
//set empty containers to observe at the begining and the end of
//services section
// const servicesSection = document.querySelector("#services");
// const options = { 
//     root: null,
//     threshold: 0.9,
//     rootMargin: "1px" //>50% doesnt work, find a way to convert vh to pixels
// };

// const io = new IntersectionObserver(function(entries, io) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) { //react only when intersecting with element
//             return;
//         }
//         console.log(entry.target);
//     });
// }, options);

// io.observe(servicesSection);

//find overflows
// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//     document.querySelectorAll('*'),
//     function(el) {
//         if (el.offsetWidth > docWidth) {
//             console.log(el);
//             console.log('overflow!')
//         }
//     }
// );