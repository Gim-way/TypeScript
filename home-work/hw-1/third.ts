const employees: string[] = [
  'инженер-конструктор Игорь',
  'главный бухгалтер МАРИНА',
  'токарь высшего разряда нИКОЛАй',
  'директор аэлита'
]

employees.forEach((employee) => {
  const name: string = employee.split(' ')
    .slice(-1)[0]
  const capitalized: string = name.charAt(0)
    .toUpperCase() + name.slice(1)
    .toLowerCase()
  console.log(`Привет, ${capitalized}!`)
})
