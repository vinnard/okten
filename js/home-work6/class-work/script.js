// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let replaceChar = char => char.replaceAll('---', ' ').replaceAll('..', ' ').replaceAll('__', ' ');
// console.log(replaceChar(n3));
//
//створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let a = [];
// let randomNumber = (array, index) => {
//     for (let i = 0; i < index; i++) {
//         array[i] = Math.floor(Math.random()*100);
//     }
//     return array;
// }
// console.log(randomNumber(a, 10));
//
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let a = [];
// let randomNumber = (array, index) => {
//     for (let i = 0; i < index; i++) {
//         array[i] = Math.floor(Math.random()*100);
//     }
//     return array;
// }
//
// let array = randomNumber(a, 10);
// console.log(array);
// console.log(array.sort())
//
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let a = [];
// let randomNumber = (array, index) => {
//     for (let i = 0; i < index; i++) {
//         array[i] = Math.floor(Math.random()*100);
//     }
//     return array;
// }
// let array = randomNumber(a, 10);
// console.log(array.filter(value => {
//     if(value % 2 === 0){
//         console.log(value)
//     }
// }));
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let a = [12,52,524,6,3,90,589,75,75,34];
// console.log(a.map(value => value + ''));
//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(direction, array){
//     if (direction === 'descending') {
//         return array.sort((a,b) => b - a);
//     } else if (direction === 'ascending') {
//         return array.sort((a,b) => a - b);
//     }
// }
//
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a,b) => {
//     return a.monthDuration - b.monthDuration;
// }))
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5){
//         return 5
//     }
// }))
//
//

