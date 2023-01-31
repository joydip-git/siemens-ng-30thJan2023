const addNumbers = (a: number, b: number): number => a + b
/*
const divideNumbers = (a: number, b: number): Promise<number> => {
    const p = new Promise<number>(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('denominator can not be zero')
                rejectFn(err)

            } else {
                resolveFn(res)
            }
        }
    )
    return p
}

const promiseObj = divideNumbers(12, 3)
promiseObj
    .then(
        (data: number) => console.log(data),
        (err: Error) => console.log(err.message)
    )
*/
const divideNumbers = async (a: number, b: number): Promise<number> => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('denominator can not be zero')
        throw err
    } else {
        return res
    }
}

async function callDivide() {
    try {
        const data = await divideNumbers(12, 3)
        console.log(data)
    } catch (err: any) {
        console.log(err.message)
    }
}
callDivide()

const addResult = addNumbers(12, 3)
console.log(addResult)