const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalery = ({ url, alt }) => {
  return `
  <li>
    <img class="picture" src="${url}"  alt=${alt} width = 300 height = 180>  </img>
    </li>
 `;
};
const galleryEl = document.querySelector(".gallery");
const makeArrPictures = images.map(makeGalery).join("");
galleryEl.insertAdjacentHTML("beforeend", makeArrPictures);
console.log(makeArrPictures);

const list = document.querySelector(".gallery");
list.style.listStyle = "none";
list.style.display = "flex";
list.style.justifyContent = "space-around";

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

// const galleryRef = document.querySelector(".gallery");

// const markup = images.map(({ url, alt }) => {
//   return `<li><img src="${url}" alt="${alt}"></li>`;
// });
// console.log(galleryRef);
// galleryRef.insertAdjacentHTML("beforeend", markup.join(""));
