"use strict";
var add = function (a, b) { return a + b; };
var divide = function (a, b, callback) {
    var res = a / b;
    if (res === Infinity) {
        var err = new Error('denominator can not be zero');
        callWhenDivieIsOver(err, undefined);
    }
    else {
        callWhenDivieIsOver(undefined, res);
    }
};
function callWhenDivieIsOver(err, data) {
    if (err)
        console.log(err);
    if (data) {
        console.log(data);
    }
}
divide(12, 3, callWhenDivieIsOver);
var addRes = add(12, 3);
console.log(addRes);
