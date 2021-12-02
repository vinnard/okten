// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let a = +prompt('Введіть а');
// let b = +prompt('Введіть b');
// function abs (a,b){
//     let c = a*b;
//     return c;
// }
// let result = abs(a,b);
// console.log(result);

// створити функцію яка обчислює та повертає площу кола з радіусом r
// let r = +prompt('Введіть радіус');
// function abs(r){
//     return 2 * Math.PI * r;
// }
//
// console.log(abs(r));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function abs() {
//     let h = +prompt('Введіть висоту');
//     let r = +prompt('Введіть радіус');
//     return (2 * Math.PI * Math.pow(r, 2) + 2*Math.PI*r*h)
//
// }
//
// console.log(abs());

// - створити функцію яка приймає масив та виводить кожен його елемент
// function getArray(array) {
//     for (let i of array) {
//         console.log(i);
//     }
// }
//
// let array = [1, 5, 3, 2, 5, 1, 7, 4];
// getArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text){
//     document.write(`<p>${text} </p>`);
// }
// paragraph('okten');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// list('Okten');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
// let n = +prompt('Введіть число');
// function list(text, number) {
//     document.write('<ul>');
//     for (let i = 0; i<number; i++){
//         document.write(`<li>${number}</li>`);
//     }
//     document.write('</ul>');
// }
//
// list('Okten',n);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,5,2,'fewdw', true ,'fdef',false];
// function createList(array){
//     document.write('<ul>');
//     for (let i of array){
//         document.write(`<li>${i} </li>`)
//     }
//     document.write('</ul>');
//
// }
// createList(array);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{
//     id: 1,
//     name: 'Yura',
//     age: 22
// },
//     {
//         id: 2,
//         name: 'Roma',
//         age: 19
//     },
//     {
//         id: 3,
//         name: 'Bogdan',
//         age: 19
//     }
// ]
//
// function getArray(array){
//     for(let i of array){
//         console.log(i)
//         document.write('<div>' + 'id:' +i.id + ' ' +'name: ' + i.name + ' ' +  'age: ' + i.age + '</div>');
//
//     }
// }
// getArray(array)