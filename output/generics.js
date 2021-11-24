"use strict";
//  generics
// const userData=<T extends object>(obj:T)=>{
//     let id=Math.floor(Math.random()*100)
//     return {...obj,id}
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// giving object structure
var userData = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: 'jhon',
    age: 25,
    address: 'dhaka',
};
var u1 = userData(user);
// const user='jhon'
// let user1=userData(user)
console.log(u1.name, u1.age, u1.address, u1.id);
var response = {
    id: 1,
    title: 'title',
    completed: true,
    data: {
        name: 'jhon',
        age: 25,
    }
};
