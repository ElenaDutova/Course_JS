"use strict";

/* Lesson 27. Practice. Tasks */

/* Отработка задач из урока */

// let x = 5; 
// alert( x++ );

// [ ] + false - null + true 
console.log([ ] + false);
console.log(typeof([ ] + false));
console.log([ ] + false - null);
console.log(typeof([ ] + false - null));
console.log([ ] + false - null + true);
console.log(typeof([ ] + false - null + true ));
console.log([ ] - null);
console.log(typeof([ ] - null));
console.log([ ] + false + null + true );
console.log([ ] - false - null - true );
console.log([ ] - false - null + true);

// let y = 1; 
// let x = y = 2; 
// console.log(x);

console.log([ ] + 1 + 2);

console.log("1"[0]);

console.log(2 && 1 && null && 0 && undefined);
console.log(typeof(2 && 1 && null && 0 && undefined));

// !!( a && b ) и (a && b)

// let a = 1, b = 2;

// console.log((a && b));
// console.log(!!( a && b ));


console.log(null || 2 && 3 || 4 );
// alert( null || 2 && 3 || 4 );

const a = [1, 2, 3]; 
const b = [1, 2, 3];
console.log(a === b);

console.log(+"Infinity");
console.log(typeof(+"Infinity"));
console.log(+"infinity");
console.log(typeof(+"infinity"));


let str1 = "Ёжик";
let str2 = "яблоко";
let str3 = "АКва";

console.log(str1.codePointAt());
console.log(str2.codePointAt());
console.log(str3.codePointAt());

let arr = ["Ёжик", "яблоко", "АКва"];

console.log(arr.sort());


if ("Ёжик" > "яблоко") {
    console.log("YES");
} else {
    console.log("NO!");
}



console.log(0 || "" || 2 || undefined || true || false);

