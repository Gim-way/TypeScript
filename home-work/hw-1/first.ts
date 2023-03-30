function sumDigits(value: number): number {
  let res: number = 0

  while (value !== 0) {
    res += value % 10
    value = Math.floor(value / 10)
  }

  return res
}

const arr: number[] = []

for (let i = 1; i <= 1000; i += 2) {
  arr.push(Math.pow(i, 3))
}

const sumOfNumbers: number = arr.filter((num) => sumDigits(num) % 7 === 0)
  .reduce((acc, val) => acc + val, 0)
const modifiedSumNumber: number = arr.filter((num) => sumDigits(num + 17) % 7 === 0)
  .reduce((acc, val) => acc + val, 0)

console.log(sumOfNumbers)
console.log(modifiedSumNumber)




console.log(sumOfNumbers)
console.log(modifiedSumNumber)