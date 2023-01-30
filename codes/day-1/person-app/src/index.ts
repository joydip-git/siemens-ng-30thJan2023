//import { Person } from "./models/person"
import { Trainer } from "./models/trainer"
//const { Person } = require('./models/person')

let a = 100
console.log(a)
for (var i = 0; i < 1; i++) {
    let a = 200
    console.log(a)
}
console.log(a)
const m = 200
//const arr = new Array(1, 2, 3, 4)
const arr = [1, 2, 3, 4]
const copyArr = [...arr, 10, 20]


const addPerson = () => {
    const idTextBox = <HTMLInputElement>document.querySelector('#txtId')
    const nameTextBox = <HTMLInputElement>document.querySelector('#txtName')
    const salaryTextBox = <HTMLInputElement>document.querySelector('#txtSalary')
    const subjectTextBox = <HTMLInputElement>document.querySelector('#txtSubject')

    const id = Number(idTextBox.value)
    const salary = Number(salaryTextBox.value)
    const name = nameTextBox.value
    const subject = subjectTextBox.value

    const p = new Trainer(id, name, salary, subject)
    //spread operator (...)
    //const copy = { ...p }
    const printFnRef = p.print
    window.alert('hello: ' + printFnRef())
    // const idValue = p.id
    // const nameValue = p.name
    //const { name: nameValue, id: idValue } = p
    //console.log(idValue, nameValue)
}
const btnObj = document.getElementById('btnAdd')
btnObj?.addEventListener('click', addPerson)