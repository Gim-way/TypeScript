class Student {
  name: string
  age: number
  grades: number[]

  constructor(name: string, age: number, grades: number[]) {
    this.name = name
    this.age = age
    this.grades = grades
  }
}

class Course {
  name: string
  students: Student[]

  constructor(name: string, students: Student[]) {
    this.name = name
    this.students = students
  }

  getAverageGrade(): number {
    let total = 0
    let count = 0
    this.students.forEach((student) => {
      student.grades.forEach((grade) => {
        total += grade
        count++
      })
    })
    return total / count
  }
}

// создаем объекты студентов
const john = new Student('John', 20, [80, 85, 90])
const mary = new Student('Mary', 19, [75, 80, 85])

// создаем объект курса и добавляем студентов
const mathCourse = new Course('Mathematics', [john, mary])

// демонстрируем работу композиции
console.log(mathCourse.name) // "Mathematics"
console.log(mathCourse.students.length) // 2
console.log(mathCourse.getAverageGrade()) // 82.5
