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

const validationInputRef = document.querySelector("#validation-input");

function validateInput(e) {
  const t = e.target;
  const length = Number(t.dataset.length);

  if (length === t.value.trim().length) {
    return updateClassElement(t, "valid", "invalid");
  }
  updateClassElement(t, "invalid", "valid");
}

function updateClassElement(element, add, remove) {
  element.classList.add(add);
  element.classList.remove(remove);
}

validationInputRef.addEventListener("blur", validateInput);

//замість dataset можна використовувати getAttribute()
