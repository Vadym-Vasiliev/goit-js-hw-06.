const categoriListEl = document.querySelector("#categories");
const categoriItemEl = categoriListEl.children.length;
const message = `Number of categories: ${categoriItemEl}`;
console.log(message);

const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  const categoriTitle = item.children[0].textContent;

  const number = item.children[1].children.length;

  console.log(`Category: ${categoriTitle}
Elements: ${number}`);
});

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const listLiRef = document.querySelectorAll(".item");

// listLiRef.forEach((item) => {
//   console.log(
//     `Category: ${item.querySelector("h2").textContent} \nElements: ${
//       item.querySelectorAll("li").length
//     }`
//   );
// });
