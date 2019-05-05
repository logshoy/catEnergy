var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var meh = document.querySelector('.rating-label-meh');
var fun = document.querySelector('.rating-label-fun');
var img = document.querySelector('.example__img');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

meh.addEventListener('click', function() {
  img.src='img/before-mobile.png';
});

fun.addEventListener('click', function() {
  img.src='img/after-mobile.png';
})
