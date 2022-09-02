'use strict';


/* 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста' */

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из: ${arr.join(' ')}`
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    return str;
}

console.log(showFamily(family));

/* 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль

lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы. */


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);



/* 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!" */

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!'
    } else {
        return str.split('').reverse().join('');
    }
}



/* 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let available = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    let result = `Доступные валюты:\n`;
    if (arr.length === 0) {
        return 'Нет доступных валют';
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === missingCurr) {
              continue;
            }
          result += `${arr[i]}\n`;
        }
    }
    return result;
}




/* 5)У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

- определение того, хватает ли бюджета на оплату такого объема;

- все числа идут без единиц измерения для упрощения, просто цифры и все;

- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект. */



const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
  let {shops, height, moneyPer1m3, budget} = data;
  let totalArea = 0;
  let totalVolume;
  let totalCost;
  for (let elem of shops) {
    if (typeof(elem) === 'object') {
      totalArea += +elem.width * +elem.length;
    } else {
      continue;
    }
  }
  totalVolume = totalArea * height;
  totalCost = totalVolume * moneyPer1m3;
  if (totalCost <= budget) {
    return 'Бюджета достаточно'
  } else {
    return 'Бюджета недостаточно'
  }
}



/* 6) У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда. */


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  arr.sort();
  let arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      arr1.push(arr[i]);
    } else if (i < 6) {
      arr2.push(arr[i]);
    } else if (i < 9) {
      arr3.push(arr[i]);
    } else {
      arr4.push(arr[i]);
    }
  }

  return [arr1, arr2, arr3, 
  `Оставшиеся студенты: ${ (arr4.length === 0) ? '-' : arr4.join(', ')}`]

}