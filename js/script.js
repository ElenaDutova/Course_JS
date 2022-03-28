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
// Создание элемента
console.log(div);
// Div существует только внтури js-файла, на html странице он не появится!

const text = document.createTextNode('Кукусики');
// Создает текстовый узел. Текст существует только внтури js-файла, на странице он не появится!
// ИСПОЛЬЗУЕТСЯ КРАЙНЕ РЕДКО

div.classList.add('black');
// Добавление css-класса к элементу

// document.body.append(div);
// Метод добавляет созданный в js-файле элемент в КОНЕЦ html структуры

// document.querySelector('.wrapper').append(div);
// Другой способ написания метода

wrapper.append(div);

// wrapper.prepend(div);
// Метод добавляет созданный в js-файле элемент в НАЧАЛО html структуры

// hearts[1].before(div);
// hearts[0].after(div);
// Методы добавляют элемент перед или после конкретного элемента

// circles[0].remove();
// Метод позволяет удалить элемент со страницы

// hearts[2].replaceWith(circles[1]);
// Метод ставит первый элемент на место второго, второй исчезает со страницы

{ /* Конструкции, которые устарели, но которые можно встретить в коде */

    // Предшественник append() - appendChild():
    // wrapper.appendChild(div);

    // Вместо prepend(), before(), after() был метод insertBefore() - "вставить перед":
    // wrapper.insertBefore(div, hearts[0]);

    // Вместо remove() был метод removeChild():
    // wrapper.removeChild(hearts[1]);

    // Ну и также предшественник replaceWith() - replaceChild()
    // wrapper.replaceChild(div, hearts[1]);

    // То есть раньше все команды шли через родителя
}

// div.innerHTML = 'Кукусики';
div.innerHTML = '<h1>Кукусики</h1>';
// Метод позволяет вставить код или текст в элемент на странице

// div.textContent = 'Кукусики';
// Метод позволяет вставить текст в элемент на странице

div.insertAdjacentHTML('beforebegin', 'HELLO');