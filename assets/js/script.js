// Sticky Navigation Menu 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
        scrollBtn.style.display = "block";
    }
    else {
        nav.classList.remove('sticky');
        scrollBtn.style.display = "none";
    }
}

// Side Navigation Menu CSS 
let body = document.querySelector('body');
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navLinks = document.querySelectorAll(".menu li a");

let openORcloseMenu = (opacity,menuBtnPointerEvents,overflowX,scrollBtnPointerEvents)=>{
    menuBtn.style.opacity = this.opacity;
    menuBtn.style.pointerEvents = this.menuBtnPointerEvents;
    body.style.overflowX = this.overflowX;
    scrollBtn.style.pointerEvents = this.scrollBtnPointerEvents;
}

menuBtn.onclick = function () {
    navBar.classList.add('active');
    openORcloseMenu("0","none","hidden","none");
}

cancelBtn.onclick = function () {
    navBar.classList.remove('active');
    openORcloseMenu("1","auto","auto","auto");
}

navLinks.forEach((a) => {
    a.addEventListener('click', () => {
        navBar.classList.remove('active');
        openORcloseMenu("1","auto","auto","auto");
    })
})