'use strict';

// Контекст вызова функции - this 
// - то, что окружает функцию и в каких условиях она вызывается.


// Функция может вызываться след. способами:

// 1 способ) Обычный вызов функции.
// this = window, но если установлен 'use strict', то this = underfined.

// function showThis() {
//     console.log(this);
// }

// showThis();

// При использовании функции внутри функции контекст вызова у нее не меняется:

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum())
// }

// showThis(4, 6);

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 6);

// 2 способ) Метод объекта.
//  this = сам объект.

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// obj.sum();

// Если запустить функцию внутри метода, ее this = underfined 
// (т.к. это обычный вызов функции, да еще со строгим режимом):

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// 3 способ) Оператор new.
// this в конструкторах и классах - это новый экземпляр объекта.

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// 4 способ) Ручное присвоение this любой функции.

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user ={
//     name: 'John'
// };

// Методы call() и apply() передает контекст вызова в функцию:

// sayName.call(user);
// sayName.apply(user);

// Разница между методами: 

// call принимает аргументы через запятую:

// sayName.call(user, 'Smith');

// apply принимает аргументы массивом:

// sayName.apply(user, ['Smith']);


// Метод bind() создает новую функцию, связанную с определенным контекстом. 
// (Создает новую функцию и под нее подвязывает контекст):

// function count(num) {
//     return this*num;
// }

// Вот тут double - новая функция, у которой есть жестко привязанный контекст вызова (здесь это 2):
// const double = count.bind(2);

// Вот тут мы передаем в double аргумент, который идет в как аргумент num:
// console.log(double(3));


// ПРАКТИКА С ОБРАБОТЧИКАМИ СОБЫТИЙ

const btn = document.querySelector('button');

// this - сам элемент, на котором произошло событие:

btn.addEventListener('click', function() {
    // console.log(this);
    this.style.backgroundColor = 'red';
});


// this в стрелочных функциях:
// Стрелочные функции не имеют своего контекста вызова, они берут его у своего родителя:


// В данном случае родителем стрелочной функции say является метод sayNumber объекта object. 
// И контекст вызова у say будет object:
const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

object.sayNumber();


// Стрелочные функции часто используются для модификации каких-то элементов прямо здесь на месте 
// и у них есть небольшие синтаксические нюансы:

const double = a => a * 2;

console.log(double(4));