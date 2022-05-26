// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationInputEl = document.querySelector("#validation-input");

function validateInput(event) {
  const update = event.target;
  const length = Number(update.dataset.length);

  length === update.value.trim().length
    ? update.classList.add("valid")
    : update.classList.add("invalid");
}

validationInputEl.addEventListener("blur", validateInput);

//================
// const validationInputEl = document.querySelector("#validation-input");

// function validateInput(event) {
//   const update = event.target;
//   const length = Number(update.dataset.length); // кількість знаків

//   if (length === update.value.trim().length) {
//     return updateClassElement(update, "valid", "invalid");
//   }
//   updateClassElement(update, "invalid", "valid");
// }

// function updateClassElement(element, add, remove) {
//   element.classList.add(add);
//   element.classList.remove(remove);
// }

// validationInputEl.addEventListener("blur", validateInput);

//замість dataset можна використовувати getAttribute()
