"use strict";

/* Lesson 29. Practice. Actions with elements on the page */

const box = document.getElementById("box"),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: MediumSeaGreen; width: 555px";

btns[1].style.borderRadius = "100%";
btns[1].style.backgroundColor = "pink";
btns[1].style.color = "#000";

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = `#FF7F50`;
}

hearts.forEach(item => {
    item.style.background = 'MediumSlateBlue';
});


const div = document.createElement('div');
console.log(div);
// Div существует только внтури js-файла, на странице он не появится!

const text = document.createTextNode('Кукусики');
// Создает текстовый узел. Текст существует только внтури js-файла, на странице он не появится!
// ИСПОЛЬЗУЕТСЯ КРАЙНЕ РЕДКО

div.classList.add('black');

// document.body.append(div);

// document.querySelector('.wrapper').append(div);

// wrapper.prepend(div);

// hearts[1].before(div);
hearts[0].after(div);

// circles[0].remove();

hearts[2].replaceWith(circles[1]);