class UserS5EX3 {
  name: string
  age: number

  constructor()
  constructor(name: string)
  constructor(age: number)
  constructor(name: string, age: number)
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName
    }
    if (typeof age === 'number') {
      this.age = age
    }
  }
}

const userS5EX3 = new UserS5EX3('Вася')
const user2S5EX3 = new UserS5EX3()
const user3S5EX3 = new UserS5EX3(33)
const user4S5EX3 = new UserS5EX3('Вася', 33)

/* Конструктор в TypeScript  */