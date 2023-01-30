//object-literal syntax
var anilObj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return this.name + ' ' + this.salary
    }
}
//constructor function
function person(pname, pid, psalary) {
    this.name = pname
    this.id = pid
    this.salary = psalary
    this.print = function () {
        return this.name + ' ' + this.salary
    }
}
var sunilObj = new person('sunil', 2, 2000)
/*
console.log(sunilObj.name)
console.log(sunilObj['salary'])

console.log(sunilObj.print())
console.log(sunilObj['print']())
*/
sunilObj.location = 'Bangalore'
sunilObj['sayHi'] = function () {
    console.log('Hi....')
}

console.log(sunilObj)

for (var propName in sunilObj) {
    console.log(propName + ':' + sunilObj[propName])
}