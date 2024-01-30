// Variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const closedCookie = document.querySelector('#img-closed-cookie');
const btnOpenNewCookie = document.querySelector('#btn-new-cookie');

// Events
closedCookie.addEventListener('click', handleOpenCookieClick);
btnOpenNewCookie.addEventListener('click', handleOpenNewCookieClick);

// Functions
function handleOpenCookieClick(event) {
  toggleScreen();
}

function handleOpenNewCookieClick(event) {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
