'use strict';

// JSON - javascript object notation
// Современный текстовый формат передачи данных в формате "Ключ: значение"

const persone = {
    name: 'Alex',
    tel: '+79993335555',
    parents: {
        mom: 'Olga',
        dad: 'Ivan',
        sister: 'Kate'
    }
};

// console.log(JSON.parse(JSON.stringify(persone)));

// Создаем глубокую копию объекта при помощи JSON:

const clonePersone = JSON.parse(JSON.stringify(persone));
clonePersone.parents.mom = 'Ann';
console.log(clonePersone);
console.log(persone);
