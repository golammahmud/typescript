"use strict";
// anytype also called dynamic type
var d = "hello";
d = 1;
console.log(d);
var anyarray = [1, 2, 3];
anyarray.push("hello");
console.log(anyarray);
var anyobject = {};
anyobject.name = 'jhon';
anyobject.age = 30;
anyobject.status = true;
console.log(anyobject);
// how to use function in typescript
var myFunction;
myFunction = function () {
    console.log("hello");
};
myFunction();
// optional parameter define ?
// const myFunc=(a:string,b:string,c?:number=10)=>{
// set default parameter values
var myFunc = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    console.log("Hello " + a + " " + b);
};
myFunc("jhon", "doe");
// undefined and void are different things .void is used to define function that does not return any value.
// undefined is used to define variable that is not assigned any value.
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(c);
    return ("result " + a.concat(b));
};
console.log(add("jhon", "doe"));
var userDetails = function (id, user) {
    console.log(user.name);
    console.log("user id:" + id + " name is " + user.name + " and age " + user.age);
};
userDetails(1, { name: "jhon", age: 30 });
