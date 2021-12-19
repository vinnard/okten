- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    };
    this.info = function () {
        console.log(`Модель: ${this.model} Виробник: ${this.producer} Рік випуску: ${this.year} Максимальна швидкість: ${this.maxSpeed} Мотор: ${this.engine} `);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    };
    info () {
        console.log(`Модель: ${this.model} Виробник: ${this.producer} Рік випуску: ${this.year} Максимальна швидкість: ${this.maxSpeed} Мотор: ${this.engine} `);
    };
    changeYear (newValue) {
        this.year = newValue;
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    addDriver (driver) {
        this.driver = driver;
    };
}

-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderellas {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Princ {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let princ = new Princ('Yura', 22, 37);


let cinderellas = [
    new Cinderellas('Alina', 18, 42),
    new Cinderellas('Yana', 18, 37),
    new Cinderellas('Yulia', 17, 38)];


console.log(cinderellas.find(value => value.size === princ.size));
