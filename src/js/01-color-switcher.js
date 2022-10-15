const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let isActive = false;
let timerId = null;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
  if (isActive) {
    return;
  }
  timerId = setInterval(() => {
    isActive = true;
    console.log('click to button START,', `color: ${getRandomHexColor()}`);
    getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  0207;
}

function onClickStopBtn() {
  clearInterval(timerId);
  isActive = false;
  console.log('click to button STOP!!!');
}
