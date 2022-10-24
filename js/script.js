'use strict';

// Функции-конструкторы.

// Для создания множества похожих и однотипных
// объектов мы можем использовать функцию конструктор и оператор new.
// Имя функции-контруктора пишется с большой буквы.

function User(name, age) {
    this.name = name;
    this.age = age;
    this.isHuman = true;
    this.hello = function() {
        console.log(`Hello ${this.name}!`);
    };
}

// Функция-контруктор должна вызываться через оператор new:

const lena = new User('Lena', 25),
      roma = new User('Roman', 30);

console.log(lena);
console.log(roma);

lena.hello();

// Также мы можем использовать prototype:

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} вышел из дома!`);
};

roma.exit();