// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  const ret = (counterValue -= 1);
  // console.log(`${(counterValue -= 1)}`);
  return (valueEl.textContent = counterValue);
});
incrementBtn.addEventListener("click", () => {
  const ret = (counterValue += 1);

  // console.log(`${(counterValue += 1)}`);
  return (valueEl.textContent = counterValue);
});

// ================

// const decrementRef = document.querySelector('[data-action="decrement"]');
// const incrementRef = document.querySelector('[data-action="increment"]');
// const valueRef = document.querySelector("#value");
// let counterValue = 0;

// function decrement() {
//   counterValue -= 1;
//   updateCounterValue();
// }
// function increment() {
//   counterValue += 1;
//   updateCounterValue();
// }

// function updateCounterValue() {
//   valueRef.textContent = counterValue;
// }

// decrementRef.addEventListener("click", decrement);
// incrementRef.addEventListener("click", increment);
