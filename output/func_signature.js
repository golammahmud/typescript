"use strict";
// let myAdd:(x:number, y:number, z?:number) => number;
// myAdd=(x:number, y:number, z?:number)=>{
//     if (z) {
//         return x + y + z;
//         // console.log(x, y, z);
//     }
//     // console.log(x, y);
//     return x + y;
// }
// console.log(myAdd(1,2,4));
// let myAdd:(x:number, y:number, z?:number) => number;
// myAdd=(x:number, y:number, z:number=10) => {
//     if (z) {
//         return x + y + z;
//         // console.log(x, y, z);
//     }
//     return x + y;
// }
// console.log(myAdd(1,2));
var calCulate;
calCulate = function (x, y, z) {
    if (z == "add") {
        return x + y;
        // console.log(x, y, z);
    }
    if (z == "sub") {
        return x - y;
        // console.log(x, y, z);
    }
    if (z == "mul") {
        return x * y;
        // console.log(x, y, z);
    }
    if (z == "div") {
        return x / y;
        // console.log(x, y, z);
    }
    return 0;
};
console.log(calCulate(1, 2, "sub"));
var userDetail;
userDetail = function (id, userInfo) {
    console.log(id);
    console.log(userInfo);
};
// userDetail("123",{name:"jhon",age:30});
userDetail("123", { name: "jhon", age: 30 });
