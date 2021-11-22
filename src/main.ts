
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


const persone = {
    name:'',
};
  persone.name = 'John';

    console.log(persone.name);

// create fruits array
const fruits = ['Apple', 'Banana', 'Orange',7, true];
fruits.push('lemon');
const [,banana,orange] = fruits;
console.log(fruits);
console.log(banana);


// addition function
const sum = (a:number, b:number) => {
    return a + b;
}
console.log(sum(1,2));
