class PersonHW2 {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  introduce(): void {
    console.log(`Меня зовут ${this.name}, мне ${this.age} лет`)
  }
}

class StudentHW2 extends PersonHW2 {
  grade: number

  constructor(name: string, age: number, grade: number) {
    super(name, age)
    this.grade = grade
  }

  introduce(): void {
    console.log(`Меня зовут ${this.name}, мне ${this.age} лет, я учусь в ${this.grade} классе`)
  }
}

const person = new PersonHW2('Иван', 30)
person.introduce() // Меня зовут Иван, мне 30 лет

const student = new StudentHW2('Иван', 20, 3)
student.introduce() // Меня зовут Иван, мне 20 лет, я учусь в 3 классе
