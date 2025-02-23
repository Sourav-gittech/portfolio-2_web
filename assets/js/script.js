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
    });
});

// counter design 
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter('count', 0, 10, 6000);
    counter('count1', 0, 90, 6000);
    counter('count2', 0, 85, 6000);
    counter('count3', 0, 95, 6000);
    counter('count4', 0, 100, 6000);
});
