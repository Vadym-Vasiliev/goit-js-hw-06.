// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormEl = document.querySelector(".login-form");

function fooForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("Заповніть поле форми!");
  }
  const object = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  };

  event.currentTarget.reset();
}

loginFormEl.addEventListener("submit", fooForm);

//=========
// const loginFormRef = document.querySelector(".login-form");

// function getDataForm(e) {
//   e.preventDefault();

//   const { email, password } = e.target.elements;
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (!emailValue || !passwordValue) {
//     return alert("Треба заповнити всі поля");
//   }
// const data = {
//   [email.name]: emailValue,
//   [password.name]: passwordValue,
// };
//   console.log(data);
//   e.currentTarget.reset();
// }

// loginFormRef.addEventListener("submit", getDataForm);

//за допомогою document.forms отримуємо доступ до форми

// preventDefault не перезапускає сторінку
