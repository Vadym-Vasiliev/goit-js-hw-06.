// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createMarkup(amount) {
  let size = 30;
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    markup += `<div class="item" style="width: ${size}px; height: ${size}px; background: ${getRandomHexColor}"></div>`;
    size += 10;
  }

  return markup;
}

function clearMarkup() {
  updateMarkup();
  inputRef.value = "";
}

function getValue() {
  const value = inputRef.value;

  if (!value) return;
  creatBoxes(Number(value));
}

function creatBoxes(amount) {
  const markup = createMarkup(amount);
  updateMarkup(markup);
}

function updateMarkup(markup = "") {
  boxesRef.innerHTML = markup;
}

createRef.addEventListener("click", getValue);
destroyRef.addEventListener("click", clearMarkup);
