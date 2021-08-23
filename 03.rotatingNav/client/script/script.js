import { darkTheme } from './darktheme';

darkTheme();

const domEL = {
  openBtnEL: document.getElementById('open'),
  openBtnEL: document.getElementById('close'),
  navCircleEL: document.getElementById('navCircle'),
  appEL: document.getElementById('app'),
  navUlEL: document.getElementById('nav__ul'),
};

function navHandler(state) {
  if (state) {
    domEL.navCircleEL.classList.add('-rotate-90');
    domEL.appEL.classList.add('-rotate-12');
    domEL.navUlEL.classList.remove('-translate-x-32');
  } else {
    domEL.navCircleEL.classList.remove('-rotate-90');
    domEL.appEL.classList.remove('-rotate-12');
    domEL.navUlEL.classList.add('-translate-x-32');
  }
}

domEL.navCircleEL.addEventListener('click', (e) => {
  e.target.parentNode.getAttribute('id') === 'open'
    ? navHandler(true)
    : navHandler(false);
});
