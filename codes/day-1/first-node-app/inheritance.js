//'use strict'
function person(pname, pid, psalary) {
    this.name = pname
    this.id = pid
    this.salary = psalary
}
Object.prototype.print = function () {
    return this.name + ' ' + this.salary
}
console.log(Object.prototype)
var anilObj = new person('anil', 1, 1000)
//console.log(anilObj.print())
var fnRef = anilObj.print
fnRef = fnRef.bind(anilObj);
console.log(fnRef())

console.log(anilObj.hasOwnProperty('print'))
// console.log(person.prototype.hasOwnProperty('print'))
console.log(anilObj.__proto__.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))
// var sunilObj = new person('sunil', 2, 2000)
// console.log(global)

//fn()
//new fn()
//referenceVariable.fn()