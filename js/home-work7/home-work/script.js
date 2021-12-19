// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let array = [new User(0,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(1,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(2,'Andriy', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(3,'Maryan', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(4,'Lesya', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(5,'Roma', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(6,'Sasha', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(7,'Kokoc', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(8,'Abrikos', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(9,'Kokoc', 'Ilkiw', 'vinnard99@gmail.com', '+380689551318'),
// ];
// console.log(array)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let array = [new User(0,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(1,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(2,'Andriy', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(3,'Maryan', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(4,'Lesya', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(5,'Roma', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(6,'Sasha', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(7,'Kokoc', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(8,'Abrikos', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(9,'Kokoc', 'Ilkiw', 'vinnard99@gmail.com', '+380689551318'),
// ];
//
// console.log(array.filter(value => {
//     return value.id % 2 === 0
// }))
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let array = [new User(0,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(1,'Yura', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(2,'Andriy', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(3,'Maryan', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(10,'Lesya', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(42,'Roma', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(6,'Sasha', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(7,'Kokoc', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(8,'Abrikos', 'Radkovskyi', 'vinnard99@gmail.com', '+380689551318'),
//     new User(9,'Kokoc', 'Ilkiw', 'vinnard99@gmail.com', '+380689551318'),
// ];
// console.log(array.sort((a,b) => { return a.id - b.id }));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// створити пустий масив, наповнити його 10 об'єктами Client
// let array = [];
// for(let i = 0; i<10; i++){
//     array.push(new Client(i, `kokos${i}`,`abrikos${i}`, `email${i}`,`+38058642${i}`,['Кокос', 'Абрикос', 'Банан']));
// }
// console.log(array);
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [new Client(1, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple']),
//     new Client(2, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан']),
//     new Client(3, `kokos`, `abrikos`, `email`, `+38058642`, ['Банан', 'Apple']),
//     new Client(4, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple', 'Juice', '']),
//     new Client(5, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Apple']),
//     new Client(6, `kokos`, `abrikos`, `email`, `+38058642`, ['Apple']),
//     new Client(7, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple']),
//     new Client(8, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple', 'cheese', 'juice']),
//     new Client(9, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple']),
//     new Client(10, `kokos`, `abrikos`, `email`, `+38058642`, ['Кокос', 'Абрикос', 'Банан', 'Apple'])
// ];
//
// console.log(array.sort((a, b) => {
//     return b.order.length - a.order.length
// }));


