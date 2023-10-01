// Получите текущий URL
const currentURL = document.URL;

// Создайте объект URL
const url = new URL(currentURL);

// Получите параметры строки запроса из объекта URL
const searchParams = url.searchParams;

// Извлеките значение параметра по его имени
const paramValue = searchParams.get("id");


const content = document.querySelector(".article-container > p");
const title = document.querySelector(".dasscord-add");
title.textContent = articles[paramValue].title;
content.textContent = articles[paramValue].content;