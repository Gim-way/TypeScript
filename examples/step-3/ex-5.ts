const skills: string[] = ['Dev', 'DevOps', 'Testing']

for (const skill of skills) {
  console.log(skill.toLowerCase())
}

const modifiedSkills: string = skills
  .filter((s: string) => s !== 'DevOps')
  .map(s => s + '! ')
  .reduce((acc, val) => acc + val)

console.log(modifiedSkills)

/* Типизировали массив, проходимся по циклу и выводим значение в console.log.
*  Модифицируем массив, фильтруем его, исключаем "DevOps" из него.
* Далее добавляем к каждому элементу "! ", после конкатенируем все элементы в массиве*/