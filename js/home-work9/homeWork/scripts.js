// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let newDiv = document.createElement('div');
newDiv.classList.add('wrap','collapse','alpha','beta')
newDiv.style.color = 'red';
newDiv.style.background = 'blue';
newDiv.innerText = 'Okten';
document.body.appendChild(newDiv);
document.body.appendChild(newDiv.cloneNode(true));