"use strict";

const navbg = document.querySelector('.navleft');
const navbg2 = document.querySelector('.navright');
const navlogo = document.querySelector('.mainlogo');
const headerbg = document.querySelector('.headerbg');

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

const searchbutton = document.querySelector('.search__btn');
const searchbackground = document.querySelector('.searchbg');
const sidemenubutton = document.querySelector('.sidemenu__btn');
const searchbox = document.querySelector('.search__box');
const searchclose = document.querySelector('.search--close');
const searchfind = document.querySelector('.search--icon');
const searchInspection = document.querySelector('.search--input');


console.log(searchInspection);


// header
// header slideDown-Up
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

// nav fadeIn-Out
navbg.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg.addEventListener('mouseleave', function () {
  navremovecall();
});

navbg2.addEventListener('mouseenter', function () {
  navaddcall();
});
navbg2.addEventListener('mouseleave', function () {
  navremovecall();
});

function navaddcall() {
  navlogo.classList.add('logofade');
  headerbg.classList.add('headerslide');
}
function navremovecall() {
  navlogo.classList.remove('logofade');
  headerbg.classList.remove('headerslide');
}

// searchbt background fadeIn-Out
searchbutton.addEventListener("click", (event) => {
  event.preventDefault();
  searchbackground.classList.add('searchbg--show');
  searchbox.classList.add('searchbox--show');
  searchbackground.classList.remove('searchbg--hide');
  searchbox.classList.remove('searchbox--hide');
});

searchclose.addEventListener("click", (event) => {  
  event.preventDefault();
  searchbackground.classList.add('searchbg--hide');
  searchbox.classList.add('searchbox--hide');
  searchbackground.classList.remove('searchbg--show');
  searchbox.classList.remove('searchbox--show');
});

searchfind.addEventListener("click", (event) => {
  event.preventDefault();
  alert("검색어를 입력해주세요.");
})







// swiperslide plugin
// slidemenu option
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

