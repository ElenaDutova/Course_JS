'use strict';

// Классы
// -  - красивая обертка функций-конструкторов (синтаксический сахар). 
// Классы внутри - все те же функции.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// const square = new Rectangle(15, 15);
// const longRect = new Rectangle(10, 20);

// console.log(square.calcArea());
// console.log(longRect.calcArea());

// Классы могут наследовать от других классов.

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(20, 20, 'Hello World', 'blue');

div.showMyProps();
console.log(div.calcArea());