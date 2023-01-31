"use strict";
//rest parameter (2015-ES6)
function calculateAverage(name) {
    var marks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        marks[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, marks_1 = marks; _a < marks_1.length; _a++) {
        var mark = marks_1[_a];
        sum += mark;
    }
    return sum / marks.length;
}
var firstAverage = calculateAverage('anil', 30, 40);
var secondAverage = calculateAverage('sunil', 30, 40, 50);
console.log(firstAverage, secondAverage);
