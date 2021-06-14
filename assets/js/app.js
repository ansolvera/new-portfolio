// ********************
// INITIALIZE SAL.JS
// ********************

import sal from 'sal.js'
sal();

// ********************
// PRIVACY COOKIE
// ********************

// BAKE SESSION COOKIE
Cookies.set('visited', 'true', { expires: 1 });

// ********************
// DISPLAY MONTH
// ********************

// DEFINE DATE VARIABLES
let date = new Date();
let month = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// GET MONTH
let monthString = month[date.getMonth() + 1];

// DISPLAY MONTH
let monthSpan = document.querySelector("#month");
if (monthSpan) {
    monthSpan.innerHTML = monthString;
}

/* // ********************
// FADE IN ON SCROLL
// ********************

// INITIALIZE CALLBACK FUNCTION
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => { 
                entry.target.classList.add("is-revealed");
                observer.unobserve(entry.target);
            }, 500)
        }
    });
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

// CREATE INTERSECTION OBSERVER
const observer = new IntersectionObserver(callback, options);

// SELECT TARGETS
const targets = document.querySelectorAll(".reveal");
targets.forEach(target => {
    observer.observe(target)
});

// ********************
// POP IN ON SCROLL
// ********************

// INITIALIZE CALLBACK FUNCTION
const popCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => { 
                entry.target.classList.add("is-popped");
                observer.unobserve(entry.target);
            }, 500)
        }
    });
};

const popOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

// CREATE INTERSECTION OBSERVER
const popObserver = new IntersectionObserver(popCallback, popOptions);

// SELECT TARGETS
const popTargets = document.querySelectorAll(".pop");
popTargets.forEach(target => {
    popObserver.observe(target)
});

// ********************
// TOAST
// ********************

let toasted = true;

// MAKE TOAST
const toast = document.querySelector("#toast");
window.addEventListener('load', () => {
    if(!toasted) {
        toast.classList.add("is-revealed");
        toasted = true;
    }
});

// KILL TOAST
const noToast = document.querySelector('#toast-no');
noToast.addEventListener('click', () => {
    toast.classList.remove("is-revealed");
    toast.classList.add("is-hidden");
});

// ********************
// SHOW MOBILE MENU
// ********************

let headerOpen = false;

const header = document.querySelector("#header");
const burger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobile-menu");
burger.addEventListener('click', () => {
    header.classList.toggle("open");
    if(!headerOpen) {
        headerOpen = true;
        mobileMenu.classList.add("is-slid-down");
        body.classList.add("no-scroll");
    } else {
        headerOpen = false;
        mobileMenu.classList.remove("is-slid-down");
        mobileMenu.classList.add("is-slid-up");
        body.classList.remove("no-scroll");
    }
    
});

// ********************
// SPLASH MODAL
// ********************

let splashed = true;

function makeSplash() {
    if(!splashed) {
        setTimeout(() => {
            splashed=true;
        }, 30000)
    }
};

// SHOW MODAL
const body = document.querySelector("body");
const splash = document.querySelector("#splash");

document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget && !splashed) {
        setTimeout(() => {
            splash.classList.add("is-scaled-up");
            body.classList.add("no-scroll");
            splashed = true;
            toasted = true;
        }, 1000)
    }
});

// CLOSE MODAL
const modalClose = document.querySelector("#close-button");
modalClose.addEventListener('click', () => {
    splash.classList.remove("is-scaled-up");
    splash.classList.add("is-scaled-down");
    body.classList.remove("no-scroll");
}) */

