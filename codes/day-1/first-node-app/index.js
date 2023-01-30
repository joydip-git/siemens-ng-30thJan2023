// function person(pname, pid, psalary) {
//     this.name = pname
//     this.id = pid
//     this.salary = psalary
// }
// person.prototype.print = function () {
//     return this.name + ' ' + this.salary
// }
class Person {
    constructor(pname, pid, psalary) {
        this.name = pname
        this.id = pid
        this.salary = psalary
    }
    print() {
        return this.name + ' ' + this.salary
    }
}
console.log(Person.prototype)
/*
function trainer(pname, pid, psalary, psubject) {
    person.call(this, pname, pid, psalary)
    this.subject = psubject
    this.print = function () {
        // return person.prototype.print.apply(this) + ' ' + this.subject
        return this.__proto__.print.apply(this) + ' ' + this.subject
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)
*/
class Trainer extends Person {
    constructor(pname, pid, psalary, psubject) {
        super(pname, pid, psalary)
        this.subject = psubject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}
//Object.setPrototypeOf(trainer.prototype, person.prototype)

var joyTrainer = new Trainer('joydip', 1, 1000, 'JS')
console.log(joyTrainer.__proto__)
// joyTrainer.__proto__ = person.prototype
console.log(joyTrainer.print())