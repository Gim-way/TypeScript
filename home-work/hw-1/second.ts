const list: string[] = ['в', '5', 'часов', '17', 'минут', 'температура', 'воздуха', 'была', '+5', 'градусов']

const processedList: string[] = list.map((item: string) => {
// Проверяем, является ли элемент числом (целым или со знаком)
  if (/^[+-]?\d+$/.test(item)) {
// Добавляем кавычки и дополняем нулями до двух целочисленных разрядов
    return `"${item.padStart(2, '0')}"`
  }
// Если элемент не является числом, возвращаем его без изменений
  return item
})

console.log(processedList)

const resultString: string = processedList.join(' ')

console.log(resultString)