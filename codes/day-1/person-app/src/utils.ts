export const add = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): void => console.log(a + b)
export const divide = (a: number, b: number): number => {
    if (b !== 0) {
        const res = a / b
        return res
    } else {
        throw new Error('can not divide by zero')
    }
}