'use strict';

/* 

У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, 
но ему не хватает навыков. Выполните часть заданий за него.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно */


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    for (let key in plan) {
        if (typeof(plan[key]) == 'object') {
            for (let i in plan[key]) {
                if (i == 'exp') {
                    return `${plan[key][i]}`;
                }
            }
        }
    }
}

// console.log(showExperience(personalPlanPeter));


/* 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными 
и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% 
Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. 
Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки. */


function showProgrammingLangs(plan) {

}