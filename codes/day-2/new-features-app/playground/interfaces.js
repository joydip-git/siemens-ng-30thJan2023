"use strict";
exports.__esModule = true;
var Opertions = /** @class */ (function () {
    function Opertions() {
    }
    Opertions.prototype.add = function (a, b) {
        return a + b;
    };
    return Opertions;
}());
var Person = /** @class */ (function () {
    function Person(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Person.prototype.print = function () {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
var people = [
    {
        id: 1,
        name: 'sunil',
        salary: 1000
    },
    new Person('anil', 2, 2000)
];
function get() {
    return [1, 2, 3, 4];
}
