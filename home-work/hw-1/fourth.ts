const prices: number[] = [57.8, 46.51, 97, 150.25, 23.75, 82, 110.6, 66.4, 35.99, 48, 88.8, 66.66]

// Выводим цены в нужном формате
const formattedPrices: string[] = prices.map(price => {
  const rubles: number = Math.floor(price)
  const kopecks: number = Math.round((price - rubles) * 100)
  const kopecksStr: string = kopecks < 10 ? `0${kopecks}` : `${kopecks}`
  return `${rubles} руб ${kopecksStr} коп`
})
console.log(formattedPrices.join(', '))

// Сортируем цены по возрастанию (мутирует исходный массив)

const oldPricesAsString: string = JSON.stringify(prices)
prices.sort((a: number, b: number) => a - b)
const newPricesAsString: string = JSON.stringify(prices)

if (oldPricesAsString === newPricesAsString) {
  console.log('Объект списка не изменился после сортировки')
}

console.log(prices)

// Создаем новый массив с ценами, отсортированными по убыванию
const sortedDescending: number[] = [...prices].sort((a, b) => b - a)
console.log(sortedDescending)


const top5Ascending: number [] = sortedDescending.slice(0, 5)
  .reverse()

console.log(top5Ascending)
