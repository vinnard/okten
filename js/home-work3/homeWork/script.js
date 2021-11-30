// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let array = [1,2,3,4,5,'one', 'two', 'three', 'four', 'five', true, false,true,true,false];
// console.log(array.length);
// for (let i = 0; i <= array.length; i++)
// {
//     console.log(array[i]);
//
// }

//------------ Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль ------------//
// let a = [];
// a[0] = 'Simpson';
// a[1] = 'hello';
// a[2] = 'Yura';
// a[3] = 'Okten';
// a[4] = 'Love';
// a[5] = 'Juice';
// a[6] = 'Wrld';
// for (let i = 0; i<a.length; i++) {
//     console.log(a[i]);
// }

//------------ За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині -----------//

// for (let i = 0; i<10; i++) {
//     document.write('<div> hello </div>');
// }

//- - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині -//
// for (let i = 0; i<10; i++) {
//     document.write(`<div> hello${i} </div>`);
// }

//----- - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. ----//
// let i = 0;
// while (i < 20) {
//     i++;
//     document.write('<h1> Hello </h1>');
// }

//----- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. ---//
// let i = 0;
// while (i < 20) {
//     i++;
//     document.write(`<h1> Hello ${i}</h1>`);
// }

//--- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. ---//
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of a) {
//     console.log(i);
// }
//--- - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. --//
// let a = ['Test1', 'Test2', 'test3', 'tesr4', 'test5', 'test6', 'test7', 'test8', 'teset9', 'test10'];
// for (const i of a) {
//     console.log(i);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let a = ['Hello', 22, 'old', true];
//
// for (const i of a) {
//     console.log(i);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let a = [1, 2, 3, true, false, 1, false, 42, 32, true];
// for (const i of a) {
//     let type = typeof(i);
//     if (type == 'boolean') {
//         console.log(i);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let a = [1, 2, 3, true, false, 1, false, 42, 32, true];
// for (const i of a) {
//     let type = typeof(i);
//     if (type == 'number') {
//         console.log(i);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let a = ['hello', 21, 21, true, 'okten', 43, 'love', false, 43, true];
// for (const i of a) {
//     let type = typeof (i);
//     if (type === 'string') {
//         console.log(i);
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let a = [];
// a[0] = [1];
// a[1] = ['array'];
// a[2] = ['okten'];
// a[3] = [true];
// a[4] = [23];
// a[5] = [43];
// a[6] = ['hello'];
//
// for (const i in a){
//     console.log(i);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     document.write(`<div> ${i} </div>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(`<div> ${i} </div>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 2; i < 100; i+=2) {
//     i++
//     console.log(i);
//     document.write(`<div> ${i} </div>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//     i++
//     console.log(i);
//     document.write(`<div> ${i} </div>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write