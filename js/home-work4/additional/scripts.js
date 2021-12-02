// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function concat(a, b) {
//     console.log(a, b)
//     if (a && b) {
//         return a + b;
//     } else if (a) {
//         return a;
//     } else {
//         return b;
//     }
//
// }
//
// let a = +prompt();
// let b = +prompt();
// console.log(concat(a, b));
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let a = [1,2,3,4];
// let b = [2,3,4,5]
// function arrayPlus(array, arrayTwo){
//     let c =[];
//     for(let i in array){
//         c[i] = array[i] + arrayTwo[i];
//     }
//     return c;
// }
// console.log(arrayPlus(a,b))
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function arrayKey(array) {
//     let index = 0;
//     let array2 = [];
//     for (let i in array) {
//         for (let j in array[i]) {
//             array2[index] = j;
//             index++;
//         }
//     }
//     return array2;
// }
//
// console.log(arrayKey(array));
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]