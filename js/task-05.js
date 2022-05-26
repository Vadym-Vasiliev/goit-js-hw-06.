// // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value.trim() || "Anonymous";
});

// ============

// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

// function updateText(event) {
//   const value = event.target.value.trim();

//   outputEl.textContent = value ? value : "Anonymous";
// }

// inputEl.addEventListener("input", updateText);
