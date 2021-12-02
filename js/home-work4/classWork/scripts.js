// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(a, b, c) {
//     if (a < b && a < c) {
//         max = a;
//     } else if (b < c && b < a) {
//         max = b;
//     } else {
//      max = c;
//     }
//     return max;
// }
// let max = 0;
// let array = [];
// for (let i = 0; i <= 2; i++) {
//     array[i] = +prompt('Введіть число: ');
// }
// console.log(minNumber(array[0],array[1],array[2]));
//

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(a,b,c){
//     if (a > b && a > c){
//         max = a;
//     } else if (b > a && b > c){
//         max = a;
//     } else{
//         max = c;
//     }
//     return max;
// }
// let max = 0;
// let array = [];
// for(let i=0; i<3; i++){
//     array[i] = +prompt('Введіть число: ');
// }
// console.log(maxNumber(array[0], array[1], array[2]));
//

// створити функцію яка повертає найбільше число з масиву
// let array = [12,54,23,100,533,42,53,74,866];
// function maxNumber(array){
//     let max = Math.max.apply(null, array);
//     return max;
// }
//
// console.log(maxNumber(array));
//

// - створити функцію яка повертає найменьше число з масиву
// let array = [12,1,54,23,100,533,42,53,74,866];
// function maxNumber(array){
//     let minNumber = Math.min.apply(null, array);
//     return minNumber;
// }
//
// console.log(maxNumber(array));
//

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [12,1,54,23,100,533,42,53,74,866];
// function plus(array) {
//     let result = 0;
//     for(let i of array){
//         result += i;
//     }
//     return result
// }
// console.log(plus(array));
//

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
//     let array = [12, 1, 54, 23, 100, 533, 42, 53, 74, 866];
//
// function num(array) {
//     let result = 0;
//     for (let i of array) {
//         result += i;
//     }
//     return result / array.length
// }
//
// console.log(num(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function num(...x) {
//     let min = x[0];
//     for (let i = 0; i<x.length; i++) {
//         if(x[i] < min){
//             min = x[i];
//         }
//     }
//     return min;
// }
//
// console.log(num(24, 2, 4, 5,2, 4,5));

// - створити функцію яка заповнює масив рандомними числами
// function randomNumber(array, count) {
//     for (let i = 0; i < count; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//     return array;
// }
// let array = [];
// let count = +prompt('Введіть кількість елементів масиву: ');
// console.log(randomNumber(array, count));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNumber(array, count,d) {
//     for (let i = 0; i < count; i++) {
//         array[i] = Math.floor(Math.random() * d);
//     }
//     return array;
// }
// let array = [];
// let count = +prompt('Введіть кількість елементів масиву: ');
// let d = +prompt('Введіть діапазон цифр: ');
// console.log(randomNumber(array, count,d));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1, 5, 2, 7, 5, 7, 2, 8, 6, 8, 0, 4];
//
// function arrayRevers(array) {
//     let arrayRev = array;
//     return arrayRev.reverse();
//
// }
//
// console.log(arrayRevers(array));