// 1. Створити пустий масив та :
// let array = [];
// заповнити його 50 парними числами за допомоги циклу.
// let number = 0
// for (let i = 0; i < 50; i++){
//     array[i] = number+2;
//     number += 2;
//     console.log(array[i]);
// }
// заповнити його 50 непарними числами за допомоги циклу.
// let number = 1
// for (let i = 0; i < 50; i++){
//     array[i] = number+2;
//     number += 2;
//     console.log(array[i]);
// }
// Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i <= 20; i++) {
//     array[i] = Math.floor(Math.random() * 100)
//     console.log(array[i]);
// }
// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i <= 20; i++) {
//     array[i] = Math.floor(Math.random() * (8 + 732))
//     console.log(array[i]);
// }
// 2. Вивести за допомогою console.log кожен третій елемен
// array =['h', 'e', 'o', 'e', 'k', 'l', 't','g','e','g','n'];
// for(let i = 2; i<=array.length; i += 2){
//     console.log(array[i])
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i <= 10; i++) {
//     array[i] = Math.floor(Math.random() * 100)
//
// }
//
// for (let i of array){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// for (let i = 0; i <= 10; i++) {
//     array[i] = Math.floor(Math.random() * 100)
// }
// for(let i = 0; i<=array.length; i+=2){
//     if(array[i]%2===0){
//         console.log(array[i]);
//     }
// }
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let example =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i<= example.length; i++){
//     if (example[i+1]%2===0){
//         console.log(example[i]);
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let sum = [100,250,50,168,120,345,188];
// let count = sum.length;
// let cheack = 0;
// for (let i = 0; i < sum.length; i++) {
//     cheack += sum[i];
// }
// console.log(parseInt(cheack / count));
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// for (let i = 0; i <= 10; i++) {
//     array[i] = Math.floor(Math.random() * 100)
// }
// let array2 = [];
// for (let [i,v] of array.entries()){
//    array2[i] = v*5;
// }
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let array2 = [];
// let index = 0;
// array = [23,13,'lol',true,43,"lol"]
// for (let i of array){
//     if (typeof(i) == 'number'){
//        array2[index] = i;
//         index++;
//     }
//
// }
// console.log(array2)

// - Дано 2 масиви з рівною кількістю об'єктів.
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
// ]
//
// for(i=0;i<usersWithId.length;i++){
//     for(j=0;j<citiesWithId.length;j++){
//         console.log(j,i)
//         if (citiesWithId[j].user_id === usersWithId[i].id) {
//             usersWithCities[i] = usersWithId[i];
//             usersWithCities[i].address = citiesWithId[j];
//         }
//     }
// }
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [12, 42, 23, 53, 43, 64, 22, 13, 4, 3];
//
// for (let i of array){
//     if(i%2===0){
//         console.log(i);
//     }
//
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array = [12, 42, 23, 53, 43, 64, 22, 13, 4, 3];
// let array2 = [];
// for (let [i,v] of array.entries()){
//     array2[i] = v;
// }
// console.log(array2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < array.length; i++) {
//     word += array[i];
//     console.log(word);
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let index = 0;
// let word = '';
// while (index<array.length) {
//     word += array[index];
//     console.log(word);
//     index++;
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let word = '';
// for (let i of array){
//     word += i;
//     console.log(word);
//
// }
