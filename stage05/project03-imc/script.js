// VARIAVEIS - VARIABLES
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// Restruturação modal
// const modalWrapper = document.querySelector('.modal-wrapper');
// const modalMessage = document.querySelector('.modal-wrapper .title');
// const modalBtnClose = document.querySelector('.modal-wrapper button.close');

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-wrapper .title'),
  buttonClose: document.querySelector('.modal-wrapper button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
}

/* 3 maneiras de criar e atribuir função a um evento
form.onsubmit = function() {}

form.onsubmit = () => {}

form.onsubmit = handleSubmit;

function handleSubmit() {

}*/


form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

Modal.buttonClose.onclick = () => Modal.close();

// FUNCTIONS
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}
