"use strict";

/* Lesson 26. Dynamic typing in JS */

/* Динамическая типизация - это возможность преобразовать один тип данных в другой тип данных. */

{ /* Преобразование в строку */

    // 1) Метод String() (используется редко):
    console.log(typeof(String(undefined)));
    console.log(typeof(String(123)));

    // 2) Конкатенация +:

    console.log(typeof(5 + ''));

}

{ /* Преобразование в число */

    // 1) Метод Number() (используется редко):
    console.log(typeof(Number("2")));

    // 2) Унарный плюс +:
    console.log(typeof(+"2"));

    // 3) Методы parseInt() и parseFloat():
    console.log(typeof(parseInt("2px")));
    console.log(typeof(parseFloat("2.75px")));

}

{ /* Преобразование в логический тип данных */

    // 1)
    let switcher = null;

    if (switcher) {
        console.log("Working...");
    }

    switcher = 1;

    if (switcher) {
        console.log("Working...");
    }

    // 2) Метод Boolean() (используется редко):

    // Всегда вернет false:
    console.log(Boolean(0));
    console.log(Boolean(+0));
    console.log(Boolean(-0));
    console.log(Boolean(false));
    console.log(Boolean(null));
    console.log(Boolean(NaN));
    console.log(Boolean(undefined));
    console.log(Boolean(''));

    // Всегда вернет true:
    console.log(Boolean('false'));
    console.log(Boolean(-1));
    console.log(Boolean(true));
    console.log(Boolean(Infinity));
    console.log(Boolean(-Infinity));

    // 3) Оператор Логическое НЕ "!" (используется крайне редко!):
    console.log(Boolean(!!'45555'));

}


