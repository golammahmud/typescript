"use strict";
// interface
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.sayHi = function (s) {
        console.log(s);
        return s;
    };
    Employee.prototype.spend = function (a) {
        return a;
    };
    return Employee;
}());
var jhon = new Employee('jhon', 'doe');
jhon.sayHi('hello');
