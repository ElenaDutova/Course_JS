'use strict';

/* 

У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, 
но ему не хватает навыков. Выполните часть заданий за него.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно */


/* 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится. */


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
    },
    showAgeAndLangs: function(plan) {
        let {languages} = plan.skills;
        let result = `Мне ${plan.age} и я владею языками: `;
        for (let elem of languages) {
            result += `${elem} `.toUpperCase();
        }
        return result;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// function showExperience(plan) {
//     for (let key in plan) {
//         if (typeof(plan[key]) == 'object') {
//             for (let i in plan[key]) {
//                 if (i == 'exp') {
//                     return `${plan[key][i]}`;
//                 }
//             }
//         }
//     }
// }

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));


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
    let {programmingLangs} = plan.skills;
    let result = '';
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    if (Object.keys(programmingLangs).length === 0) {
        return ' ';
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));