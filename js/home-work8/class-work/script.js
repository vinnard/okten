// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById('main_header');
// addClass.classList.add('changeColor');
//
// // b) робить шириниу елементу ul 400px
// let changeWidth = document.getElementsByTagName('ul');
// changeWidth.style.width = '400px';
//
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkWidth = document.getElementsByClassName('linkList');
// for (let e of linkWidth) {
//     linkWidth.style.width = '50%';
// }
//
// d) отримує текст який зберігається в елементі з класом listElement2
// let text = document.getElementsByClassName('listElement2');
// console.log(text[0].textContent)
// console.log(text)
//
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let list = document.getElementsByTagName('li');
// for (let e of list) {
//     e.style.background = 'silver';
// }
// //
// f) отримує всі елементи 'a' та додає їм клас anchor
// let link = document.getElementsByTagName('a');
// for (let e of link){
//     e.classList.add('anchor');
// }
//
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let list = document.getElementsByTagName('a');
// for (let i of list)
//     if (i.innerText === 'link3') {
//         i.style.fontSize = '40px'
//     }
//
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let el = document.getElementsByTagName('a');
// for (let a of el){
//     a.classList.add(`element${a.innerText}`)
// }
//
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let bg = prompt('Фон');
// for (let e of sub){
//     e.style.background = bg;
// }
//
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
// let color = prompt('color: ');
// for (let e of sub) {
//     if (e.innerText === 'content 2 segment'){
//         e.style.color = color;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content = document.getElementsByClassName('content_1');
// let text = prompt('Text');
// for (let e of content){
//     e.innerText = text;
// }
//
// l) отримати елементи p та змінити їм padding на 20px
// let elements = document.getElementsByTagName('p');
// for (let e of elements){
//     e.style.padding = '20px';
// }
//
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elements = document.getElementsByClassName('text2');
// for (let e of elements) {
//     e.innerText = 'sep-2021'
// }