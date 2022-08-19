import Notiflix from 'notiflix';

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function countPromises(count, delay, step) {
  for (i = 1; i <= count; i += 1) {
    let time = delay + step * (i - 1);
    createPromise(i, time)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function submitForm(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.target;
  const delayTime = Number(delay.value);
  const stepTime = Number(step.value);
  const amountNumber = Number(amount.value);

  countPromises(amountNumber, delayTime, stepTime);
}
