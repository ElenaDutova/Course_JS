"use strict";

/* Object prototypes */

// const str = "something";
// const strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 3, 5, 7]);

const soldier = {
    health: 200,
    mana: 200,
    attack: 5,
    armor: 7,
    weapon: true,
    sayHello: function() {
        console.log('Hello!');
    }
};

const johnKonstantin = {
    health: 300
};


// johnKonstantin.__proto__ = soldier;
// console.log(johnKonstantin.armor);
// johnKonstantin.sayHello();

// Object.setPrototypeOf(johnKonstantin, soldier);
// console.log(johnKonstantin.armor);
// johnKonstantin.sayHello();

const vasya = Object.create(soldier);

console.log(vasya);
console.log(vasya.attack);


