import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  flatpickInit: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  tableDays: document.querySelector('[data-days]'),
  tableHours: document.querySelector('[data-hours]'),
  tableMinutes: document.querySelector('[data-minutes]'),
  tableSeconds: document.querySelector('[data-seconds]'),
};

let pickedDate = null;
refs.startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true, //Enables time picker: false
  time_24hr: true, //Displays time picker in 24 hour mode without AM/PM selection when enabled: false
  defaultDate: new Date(),
  minuteIncrement: 1, // Adjusts the step for the minute input (incl. scrolling): 5
  isActive: false,
  onClose(selectedDates) {
    pickedDate = selectedDates[0];
    let dateNow = options.defaultDate;

    if (pickedDate < dateNow) {
      Notiflix.Report.warning('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled');
  },
};

refs.startBtn.addEventListener('click', countDown);
flatpickr(refs.flatpickInit, options);

function countDown() {
  if (this.isActive) {
    return;
  }
  this.isActive = true;

  const timerId = setInterval(() => {
    const deltaTime = pickedDate - Date.now();

    if (deltaTime === 0 || deltaTime < 0) {
      clearInterval(timerId);
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateTimer({ days, hours, minutes, seconds });
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.tableDays.textContent = `${days}`;
  refs.tableHours.textContent = `${hours}`;
  refs.tableMinutes.textContent = `${minutes}`;
  refs.tableSeconds.textContent = `${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

/////////////////////////////
/////////////////////////////
/////////////////////////////

// const selectedDates = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');

// const tableDays = document.querySelector('[data-days]');
// const tableHours = document.querySelector('[data-hours]');
// const tableMinutes = document.querySelector('[data-minutes]');
// const tableSeconds = document.querySelector('[data-seconds]');

// const deadLine = new Date(2023, 0, 1);
// console.log('deadLine:', deadLine);

// isActive = false;

// startBtn.addEventListener('click', onStartFinalCountdown);

// function onStartFinalCountdown() {
//   if (isActive) {
//     return;
//   }

// setInterval(() => {
//   is(isActive) {
//     return
//   }
//     isActive = true;
//     const currentDate = new Date();
//     const deltaTime = deadLine - currentDate;

//     const days = Math.floor(deltaTime / 1000 / 60 / 60 / 24);
//     const hours = Math.floor((deltaTime / 1000 / 60 / 60) % 24);
//     const minutes = Math.floor((deltaTime / 1000 / 60) % 60);
//     const seconds = Math.floor((deltaTime / 1000) % 60);

//     console.log(days, hours, minutes, seconds);

//     tableDays.textContent = days;
//     tableHours.textContent = hours;
//     tableMinutes.textContent = minutes;
//     tableSeconds.textContent = seconds;
//   }, 1000);
// }
