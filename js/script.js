"use strict";

/* Lesson 20. Objects */

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(a, b) {
        console.log(`${a} my dear ${b}!`);
    }
};

const {border, bg} = options.colors;

console.log(bg);

// console.log(options["colors"]['bg']);

// options.makeTest('Goodbye','friend');
// console.log(options.length);
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

let menu = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
//   let {title, width, height} = menu;
let {height, width : w, title} = menu;

  console.log(w);

