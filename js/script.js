'use strict';


const btn = document.querySelector('.btn');

let timerID,
    i = 0;


// Глобальная функция setTimeout() позволяет запустить функцию через определенный промежуток времени:

// 1

// const timerID = setTimeout(function() {
//     console.log('HELLO');
// }, 2000);


// 2

// const timerID = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'HELLO');



// 3

// const timerID = setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
// }


// 4
// Чтобы удалить setTimeout мы можем использовать 

// clearTimeout(timerID);
// clearInterval(timerID);


// 5

// btn.addEventListener('click', () => {
//     const timerID = setTimeout(logger, 2000);
// });



// function logger() {
//     console.log('text');
// }


// Глобальная функция setInterval() позволяет вызывать функцию снова и снова через определенный промежуток времени:

// 1

// btn.addEventListener('click', () => {
//     timerID = setInterval(logger, 1500);
// });



// function logger() {
//     if (i === 3) {
//         clearInterval(timerID);
//     }
//     console.log('text');
//     i++;
// }



// Вызов рекурсивного setTimeout


// let id = setTimeout(function log() {
//     console.log("yellow");
//     id = setTimeout(log, 500);
// }, 500);


// Создаем анимацию:

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10);
    function frame () {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}


btn.addEventListener('click', myAnimation);