// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.forms.one;
// let form2 = document.forms.two;
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     console.log(form1.one__input.value + ' ' +
//         form1.two__input.value + ' ' + form2.three__input.value + ' ' +
//         form2.four__input.value);
// }
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let table = document.createElement('table');
// let form = document.forms.formOne;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let rows = +form.rows.value;
//     let col = +form.columns.value;
//     let cell = form.cells.value;
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < col; j++) {
//             let column = document.createElement('td');
//             column.innerText = cell;
//             row.appendChild(column);
//
//
//         }
//         table.appendChild(row);
//     }
//
// }
// document.body.appendChild(table);
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let array = ['Курва', 'Блять', 'Нахуй', 'Пізда', 'Єбать'];
// let btn = document.getElementById('btn');
// btn.onclick = function (e) {
//     let bad = document.getElementById('bad').value;
//     e.preventDefault();
//     console.log(bad);
//     for (let i of array) {
//         if (i === bad) {
//             alert('Але вже не файно');
//         }
//     }
// }
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['Курва', 'Блять', 'Нахуй', 'Пізда', 'Єбать'];
// let btn = document.getElementById('btn');
// btn.onclick = function (e) {
//     let bad = document.getElementById('bad').value;
//     e.preventDefault();
//     console.log(bad);
//     for (let i of array) {
//         if (bad.includes(i)) {
//
//             alert('Але вже не файно');
//         }
//     }
// }

