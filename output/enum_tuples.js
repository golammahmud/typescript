"use strict";
var RType;
(function (RType) {
    RType[RType["success"] = 0] = "success";
    RType[RType["error"] = 1] = "error";
    RType[RType["warning"] = 2] = "warning";
    RType[RType["unauthenicated"] = 3] = "unauthenicated";
})(RType || (RType = {}));
var r1 = {
    status: 200,
    type: RType.error,
    data: {
        id: 1,
        title: 'title',
        completed: true
    }
};
console.log(r1);
// create tuples
var a1 = [1, 2, 3, 'hello', { name: "jhon", age: 30 }];
a1.push("typescript");
console.log(a1[4]);
var tuple = ['hello', 10, { id: 1, title: 'title', completed: true }];
// tuple.push(true);
