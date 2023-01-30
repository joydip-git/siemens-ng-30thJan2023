export class Person {
    /*
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    */
    constructor(public id: number, public name: string, public salary: number) {
    }
    print() {
        return `${this.name},${this.id},${this.salary}`
    }
}