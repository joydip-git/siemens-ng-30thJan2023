interface IOperations {
    add(a: number, b: number): number;
}
class Opertions implements IOperations {
    add(a: number, b: number): number {
        return a + b
    }
}
interface IPerson {
    name: string;
    id: number;
    salary: number;
    //print(): string;
}

class Person implements IPerson {
    constructor(public name: string, public id: number, public salary: number) {

    }
    print(): string {
        throw new Error("Method not implemented.");
    }
}

const people: IPerson[] = [
    {
        id: 1,
        name: 'sunil',
        salary: 1000
    },
    new Person('anil', 2, 2000)
]

export type myType = number | number[] | undefined | null
function get(): myType {
    return [1, 2, 3, 4]
}