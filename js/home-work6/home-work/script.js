// - Знайти та вивести довижину настипних стрінгових значень
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.length, b.length, c.length);
//
// Перевести до великого регістру наступні стрінгові значення
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.toUpperCase(), b.toUpperCase(), c.toUpperCase());
//
// Перевести до нижнього регістру настипні стрінгові значення
// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
// console.log(a.toLowerCase(), b.toLowerCase(), c.toLowerCase());
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let stringToArray = array => array.split(' ');
// let arr = stringToArray(str);
// console.log(arr);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => str.slice(0, index);
// console.log(delete_characters(str, 7));
//
// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
// console.log(insert_dash(str));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let toUp = a => {
//     let newStr = a[0].toUpperCase() + a.slice(1);
//     return newStr;
// };
//
// console.log(toUp('lool'));
//
//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = str => {
//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// }
// console.log(capitalize('привіт октен я юра'));