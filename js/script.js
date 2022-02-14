"use strict";

/* Lesson 9 JavaScript Operators */

    { /* Arithmetic operators */

        /* "+" - оператор сложения.
        Используем clg и получаем значение 14: */
        console.log(8 + 6);
        /* Если попробуем сложить значения строки и числовое значение,
        или значение строки и строки,
        то произойдет так называемая "операция склеивания" или конкатенация.
        В консоли получим значение pig6: */
        console.log("pig" + 6);
        /* В консоли получим значение pinkPig: */
        console.log("pink" + "Pig");
        

        /* "-" - оператор вычитания.
        Используем clg и получаем значение 10: */
        console.log(13 - 3);
        /* Если попробуем вычесть из значения строки числовое значение, получим значение Nan: */
        console.log("pig" - 3);

        /* "/" - оператор деления.
        Используем clg и получаем значение 5: */
        console.log(25/5);
        /* Если попробуем делить нечисловое значение на число, получим значение Nan: */
        console.log("pig"/5);

        /* "*" - оператор умножения.
        Используем clg и получаем значение 125: */
        console.log(25*5);
        /* Если попробуем умножить нечисловое значение на число, получим значение Nan: */
        console.log("pig"*5);

        /* "%" - остаточный оператор. Возвращает целочисленный остаток от деления.
        Используем clg и получаем значение 2: */
        console.log(12%5);
        /* И опять же если попробуем сделать это с нечисловым значением, получим значение Nan: */
        console.log("pig"%5);

        /* "**" - оператор возведения в степень.
        Используем clg и получаем значение 100: */
        console.log(10**2);
        /* И опять же если попробуем сделать это с нечисловым значением, получим значение Nan: */
        console.log("pig"**2);

    }

    {/* Unary operators */

        /* Унарные операторы. Унарная оперция - операция только с одним операндом. */

        /* Унарный плюс "+".
        Пытается конвертировать операнд в число, если операнд не число.
        В данном случае 5 является строкой, т.к. заключена в кавычки.
        Используем clg и получаем значение 9: */
        console.log(4 + +"5");
        /* Проверим тип данных через оператор typeof. Получаем значение number: */
        console.log(typeof(+"pinkPig"));

        /* Унарный минус "-".
        Пытается конвертировать операнд в число, если операнд не число,
        а затем возвращает его отрицательное значение.
        В данном случае 5 является строкой, т.к. заключена в кавычки.
        Используем clg и получаем значение -1: */
        console.log(4 + -"5");

        /* Также к унарным операторам относятся:
        delete, void, typeof, ~ (побитовый НЕ), ! (логический НЕ).
        Будут описаны далее. */
    }

    { /* Инкремент и декремент. Увеличение и уменьшение. */

        {   /* Инкремент "++".
            Добавляет единицу к своему операнду.

            Если используется в качестве ПРЕФИКСА (например "++x"),
            то оператор инкремент увеличивает значение операнда (прибавляет 1)
            и возвращает значение ПОСЛЕ увеличения.
            Если используется в качестве ПОСТФИКСА (например "x++"),
            то оператор инкремент увеличивает значение операнда (прибавляет 1)
            и возвращает значение ДО увеличения. */
            /* Зададим переменную х: */
            let x = 5;
            /* Используем console.log и получим значение 6: */
            console.log(++x);
            /* Закоментируем команду console.log выше. */
            /* Используем console.log и получим значение 5: */
            console.log(x++);
            /* Однако если мы не закомментируем первую команду и запустим их вместе,
            то получим значения 6 и 6 соответственно. */
        }

        {   /* Декремент "--"
            Вычитает единицу из значения своего операнда.
            
            Если используется в качестве ПРЕФИКСА (например "--x"),
            то оператор декремент уменьшает значение операнда (вычитает 1)
            и возвращает значение ПОСЛЕ уменьшения.
            Если используется в качестве ПОСТФИКСА (например "x--"),
            то оператор декремент уменьшает значение операнда (вычитает 1)
            и возвращает значение ДО уменьшения. */
            /* Зададим переменную y: */
            let y = 23;
            /* Используем console.log и получим значение 22: */
            console.log(--y);
            /* Закоментируем команду console.log выше. */
            /* Используем console.log и получим значение 23: */
            console.log(y--);
            /* Однако если мы не закомментируем первую команду и запустим их вместе,
            то получим значения 22 и 22 соответственно. */
            
        }

        /* Зададим 2 переменные: */
        let incr = 10,
            decr = 10;

        /* С помощью операторов инкремента и декремента
        увеличим/уменьшим значение переменных,
        в данном случае мы можем использовать и постфиксную и префиксную форму,
        полученные значения будут одинаковы.: */
        // ++incr;
        // --decr;

        /* Используем console.log и получаем значения 11 и 9 соответственно: */
        // console.log(incr);
        // console.log(decr);

        /* Однако, если мы попробуем сразу и произвести операцию, и увидеть значение,
        мы увидим различие между постфиксной и префиксной формой записи.
        Префиксная форма вернет нам значения уже ПОСЛЕ произведенной операции (после увеличения/уменьшения): */
        // console.log(++incr);
        // console.log(--decr);

        /* Постфиксная форма вернет нам значения ДО совершения операции.
        А затем совершит операцию (увеличит/уменьшит) значения: */
        console.log(incr++);
        console.log(decr--);
        
    }


    


