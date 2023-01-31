const add = (a: number, b: number): number => a + b

type callbackType = (err: Error | undefined, data: number | undefined) => void

function callWhenDivideIsOver(err: Error | undefined, data: number | undefined): void {
    if (err)
        console.log(err)
    if (data) {
        console.log(data)
    }
}
const divide = (a: number, b: number, callback: callbackType): void => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('denominator can not be zero')
        callback(err, undefined)
    } else {
        callback(undefined, res)
    }
}
divide(12, 3, callWhenDivideIsOver)
const addRes = add(12, 3)
console.log(addRes)