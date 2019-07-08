/* eslint-disable no-param-reassign */
// Scroll to top button
let scrollpos = window.scrollY;
const toTopButton = document.querySelector('.button-backtotop');
const addClassOnScroll = () => toTopButton.classList.add('active');
const removeClassOnScroll = () => toTopButton.classList.remove('active');
window.addEventListener('scroll', () => {
  scrollpos = window.scrollY;
  if (scrollpos >= 120) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
  // console.log(scrollpos)
});

// Modal dialog// Get the modal
const modalBtns = [...document.querySelectorAll('.modal-trigger')];
modalBtns.forEach((btn) => {
  btn.onclick = function () {
    const modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = 'block';
  };
});
const closeBtns = [...document.querySelectorAll('.close')];
closeBtns.forEach((btn) => {
  btn.onclick = function () {
    const modal = btn.closest('.modal');
    modal.style.display = 'none';
  };
});
window.onclick = function (event) {
  if (event.target.className === 'modal') {
    event.target.style.display = 'none';
  }
};

// Dynamic favicon on window focus
// const changeFavicon = (link) => {
//   let $favicon = document.querySelector('link[rel="icon"]');
//   // If a <link rel="icon"> element already exists,
//   // change its href to the given link.
//   if ($favicon !== null) {
//     $favicon.href = link;
//   // Otherwise, create a new element and append it to <head>.
//   } else {
//     $favicon = document.createElement('link');
//     $favicon.rel = 'icon';
//     $favicon.href = link;
//     document.head.appendChild($favicon);
//   }
// };
// window.onblur=function(){
//   changeFavicon("/images/favicon--bye.ico");
// }
// window.onfocus=function(){
//   changeFavicon("/images/favicon.ico");
// }

// Eyeball
const ufo = document.querySelector('body');
ufo.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eyes');
  eyes.forEach((eye) => {
    const mouseX = (eye.getBoundingClientRect().left);
    const mouseY = (eye.getBoundingClientRect().top);
    const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    // 220 instead of 180 because of Gendercomics name
    const rotationDegrees = (radianDegrees * (180 / Math.PI) * -1) + 220;
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
});
/* eslint-enable no-param-reassign */
