'use strict';

/* Задача 1

Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. + 
Эта функция принимает в себя целое число со значением длины ребра куба. +
Ответ выведите в формате строки, который изображен в примерах. +

Если в функцию попал неправильный аргумент или вычислить значения невозможно 
- вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен. +

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка' */


function calculateVolumeAndArea(cubeEdgeLength) {
    if (Number.isInteger(cubeEdgeLength) && typeof(cubeEdgeLength) === 'number' && cubeEdgeLength > 0) {
        let volume = Math.pow(cubeEdgeLength, 3),
        area = 6 * Math.pow(cubeEdgeLength, 2);
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return "При вычислении произошла ошибка";
    }
}

console.log(calculateVolumeAndArea(-7));



/* Задача 2

Напишите функцию, которая будет определять номер купе по переданному ей номеру места. +

Функция принимает только целое число от 1 до 36. +

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: +

"Ошибка. Проверьте правильность введенного номера места" +

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. 
Конечно, там будет куда больше условий, но смысл остается таким же. */




function getCoupeNumber(placeNumber) {
    if (typeof(placeNumber) !== 'number' || placeNumber < 0 || !Number.isInteger(placeNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (placeNumber === 0 || placeNumber > 36) {
        return "Таких мест в вагоне не существует";
    } else if (placeNumber >= 1 && placeNumber < 36) {
        let coupe = Math.ceil(placeNumber / 4);
        return coupe;
    }
}

console.log(getCoupeNumber(60));


/* Задача 3:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. +

Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 

Если вместо аргумента приходит не число, дробное или отрицательное число   +
- функция возвращает строку "Ошибка, проверьте данные"   +

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд)
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */

function getTimeFromMinutes(valueOfMinutes) {
    if (typeof(valueOfMinutes) != 'number' || valueOfMinutes < 0 || !Number.isInteger(valueOfMinutes)) {
        return "Ошибка, проверьте данные";
    } else {
        let hours = String(parseInt(valueOfMinutes / 60)),
            min = String(valueOfMinutes % 60),
            hoursStr = '';
        switch (+hours[hours.length - 1]) {
            case 1:
                hoursStr = 'час';
                break;
            case 2:
            case 3: 
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr = 'часов';
        }

        return `Это ${hours} ${hoursStr} и ${min} минут`;
    }
}

console.log(getTimeFromMinutes(180));


// function getTimeFromMinutes(valueOfMinutes) {
//     if (typeof(valueOfMinutes) != 'number' || valueOfMinutes < 0 || !Number.isInteger(valueOfMinutes)) {
//         return "Ошибка, проверьте данные";
//     } else {
//         let hours = String(parseInt(valueOfMinutes / 60)),
//             min = String(valueOfMinutes % 60),
//             hoursStr = '',
//             minStr = '';
//         switch (+hours[hours.length - 1]) {
//             case 1:
//                 hoursStr = 'час';
//                 break;
//             case 2:
//             case 3: 
//             case 4:
//                 hoursStr = 'часа';
//                 break;
//             default:
//                 hoursStr = 'часов';
//         }
//         switch (+min[min.length - 1]) {
//             case 1:
//                 minStr = 'минута';
//                 break;
//             case 2, 3, 4:
//                 minStr = 'минуты';
//                 break;
//             default:
//                 minStr = 'минут';
//         }

//         return `Это ${hours} ${hoursStr} и ${min} ${minStr}`;
//     }
// }

// console.log(getTimeFromMinutes(151));


/* Задача 4:

Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0  */


function findMaxNumber(a, b, c, d) {
    if (typeof(a) != 'number' ||
        typeof(b) != 'number' ||
        typeof(c) != 'number' ||
        typeof(d) != 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, -10));