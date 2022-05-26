// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

function decrement() {
  counterValue -= 1;
  updateCounterValue();
}
function increment() {
  counterValue += 1;
  updateCounterValue();
}

decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);

function updateCounterValue() {
  valueEl.textContent = counterValue;
}
