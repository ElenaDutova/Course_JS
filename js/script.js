"use strict";

/* Lesson 22. Spread Operator */

/* Для создания поверхностных копий объектов или массивов мы можем использовать оператор Spread: */

const fruits = ['apple', 'strawberry', 'orange'],
      vegetables = ['tomato', 'potato', 'cucumber'],
      fridge = [...fruits, ...vegetables, 'cheese', 'milk', 'bread'];

console.log(fridge);

/* Оператор Spread разворачивает структуру и превращает ее в набор данных. */

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nums = [1, 5, 9];

log(...nums);


/* Вот так мы можем создать поверхностную копию массива при помощи оператора Spread: */

const array = [1, 4, 5, 6, 7, 8, 9];
const newArray = [...array];

newArray[1] = 156;

console.log(array);
console.log(newArray);


/* Также оператор Spread позволяет нам создавать поверхностные копии объектов: */

const obj = {
    a: 55,
    b: 66,
    c: 77,
    d: {
        x: 88,
        y: 99
    }
};

const newObject = {...obj};

newObject.a = 44;
newObject.d.x = 0.99;

console.log(newObject);
console.log(obj);


/* Еще оператор Spread может разобрать строку: */

let str = "Hello";

let arr = [...str];

console.log(arr);

console.log(Math.max());