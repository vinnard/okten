// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn = document.getElementById('button');
// btn.onclick = function (){
//     let inp = document.getElementById('text');
//     inp.style.display = 'none';
// }
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('button');
// btn.onclick = () => {
//     btn.style.display = 'none';
// }
//
// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let age = document.getElementById('age');
// let button = document.getElementById('btn');
// button.onclick = function () {
//     if (age.value < 18) {
//         alert('Вам немає 18');
//     } else
//         alert('Вам є 18');
// }
//
// - Создайте меню, которое раскрывается/сворачивается при клике
// let btnMenu = document.getElementById('btn-menu');
// let menu = document.getElementById('menu');
// btnMenu.onclick = function (){
//     if(btnMenu.innerText === 'Hide menu'){
//         btnMenu.innerText = 'Show menu';
//         menu.style.display = 'none';
//     } else {
//         btnMenu.innerText = 'Hide menu';
//         menu.style.display = 'block'
//     }
//
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let coments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
];


for (let item of coments){
    let wrapper = document.createElement('div');
    let title = document.createElement('h1');
    let button = document.createElement('button');
    title.innerText = item.title;
    let body = document.createElement('div');
    body.innerText = item.body;
    button.innerText = 'hide';
    button.onclick = function (){
        if(body.style.display === 'none'){
            body.style.display = 'block';
        } else{
            body.style.display = 'none';
        }
    }
    wrapper.append(title,body,button);
    document.body.appendChild(wrapper);

}


