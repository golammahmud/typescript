"use strict";
// let playerName;
// playerName = 'John';
// const playerAge = 30;
// console.log(playerName);
// playerName = 2336;
// console.log(playerName);
// create persone object
// const persone = {
//   name: 'John',
//   age: 30
// };
// persone.address = 'Street'; 
// here persone.address does not exist because the object is fixed types and properties
var persone = {
    name: '',
};
persone.name = 'John';
console.log(persone.name);
// create fruits array
var fruits = ['Apple', 'Banana', 'Orange', 7, true];
fruits.push('lemon');
var banana = fruits[1], orange = fruits[2];
console.log(fruits);
console.log(banana);
// addition function
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
