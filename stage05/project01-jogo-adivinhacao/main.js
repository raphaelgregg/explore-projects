// Variables
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Events
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('keydown', handleKeyDown);
btnReset.addEventListener('click', handleResetClick);

// Callback Functions
function handleTryClick(event) {
  event.preventDefault(); // do not run the pattern

  const inputNumber = document.querySelector('#input-number');
  
  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`;
  }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function handleKeyDown(event) {
  console.log(event)
  if(event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleKeyDown();
  }
}