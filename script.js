"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

window.addEventListener("DOMContentLoaded", () => {
    console.log("все теги прогрузились");
}) 

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", () => {
    console.log("страница загрузилась");
}) 

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const body = document.querySelector('body');
const elem = (e) => {
    if (e.target.classList.contains("super_element")) {
        console.log(`Класс "super_element" присутствует в элементе '${e.target.tagName.toLowerCase()}'`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе '${e.target.tagName.toLowerCase()}'`);
    };
};

body.addEventListener('click', elem);

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textPoint = document.querySelector("textarea");
textPoint.addEventListener("mouseover", () => {
    console.log("Вы навели на textarea.");
 })


// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulPoint = document.querySelector("ul");
const ulFun = (e) => {
    e.target.classList.contains("button");
    console.log(e.target.textContent);
};

ulPoint.addEventListener('click', ulFun);


// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liColor = document.querySelectorAll("li");
for (let i = 1; i < liColor.length; i += 2) {
    liColor[i].style.backgroundColor = 'yellow'
}