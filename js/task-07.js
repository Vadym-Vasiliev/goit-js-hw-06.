// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  spanEl.style.fontSize = event.target.value + "px";
});

//============
// const inputEl = document.querySelector("input");
// const textEl = document.querySelector("#text");

// function updateElement(e) {
//   console.log("e.target.value :>> ", e.target.value);
//   textEl.style.fontSize = e.target.value + "px";
// }

// inputEl.addEventListener("input", updateElement);

// другий варіант з додаванням стилю

// const inputRef = document.querySelector("input");
// const textRef = document.querySelector("#text");

// function updateStyleElement(e) {
//   console.log("e.target.value :>> ", e.target.value);
//   textRef.style.cssText = `font-size: ${e.target.value}px`;
// }

// inputRef.addEventListener("input", updateStyleElement);

// приклад elem.style.cssText = 'color: red, font-size: 40px'
