"use strict";

/* Lesson 21. Arrays */

// const arr = [1, 2, 3, 4, 5, 6, 7];

/* Метод pop() удаляет последний элемент массива 
и возвращает его значение (если был использован через console.log): */

// arr.pop();
// console.log(arr);
// console.log(arr.pop());

/* Метод push() добавляет один или более элементов в конец массива
и возвращает новую длинну массива (если был использован через console.log): */

// arr.push(9, 11, 15, 44);
// console.log(arr);
// console.log(arr.length);
// console.log(arr.push(9, 11, 15, 44));

/* Метод shift() удаляет первый элемент массива (то есть элемент под нулевым индексом)
и возвращает его значение (если был использован через console.log).
Метод изменяет длину массива. */

// console.log(arr.shift());
// console.log(arr.length);
// arr.shift();
// console.log(arr);

/* Метод split() разделяет строку на массив строк с помощью указанного разделителя,
и возвращает новый массив: */

// const str = prompt("", ""),
//     array = str.split(", ");
// console.log(array);

/* Метод join() объединяет все элементы массива в строку и возвращает строку, содержащую элементы массива: */

// const str = prompt("", ""),
//     array = str.split(", ");
// console.log(array.join());

/* Метод sort() позволяет отсортировать элементы массива путем преобразования их в строки
и сравнения этих строк в порядке следования кодовых символов Unicode (почти что сортировка массива по алфавиту)
и возвращает отсортированный массив: */

// let words = [
//     'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
//     'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
//     'forEach', 'map', 'reduce', 'reduceRight', 'filter',
//     'some', 'every'];

// console.log(words.sort());

/* Однако, если мы попробуем отсортировать числа, у нас получится какая-то каша: */

// const numbers = [ 2, 4, 65, 43, 7, 89, 11, 132, 11, 19, 2, 8];
// console.log(numbers.sort(compareNum));

/* Чтобы отсортировать числа нормально можно воспользоваться следующей функцией: */

// function compareNum(a, b) {
//     return a - b;
// }




{ /* Методы перебора массива */

    const array = [12, 21, 3, 43, 5, 65, 7];

    /* Мы можем пребрать массив, например, такими способами: */

    /* 1) обычным циклом for: */

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > 25) {
    //         console.log(`Под индексом ${i} записано число ${array[i]} и оно больше 25`);
    //     }
    // }

    /* 2) циклом for-of: */

    // for (let elem of array) {
    //     if (elem < 25) {
    //         console.log(`Под индексом ${elem} записано число ${array[elem]} и оно меньше 25`);
    //     }
    // }

    /* 3) методом forEach(): */

    array.forEach(function(item, i, array) {
        if (item >= 20) {
            console.log(`Мы нашли число ${item} под индексом ${i} в массиве ${array} и оно больше либо равно 20`);
        }
    });

}