//rest parameter (2015-ES6)
function calculateAverage(name: string, ...marks: number[]): number {
    let sum = 0
    for (const mark of marks) {
        sum += mark
    }
    return sum / marks.length
}
const firstAverage = calculateAverage('anil', 30, 40)
const secondAverage = calculateAverage('sunil', 30, 40, 50)
console.log(firstAverage, secondAverage)

