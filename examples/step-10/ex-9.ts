function UniS10EX9(name: string): any {
  console.log(`Инициализация: ${name}`)
  return function () {
    console.log(`Вызов: ${name}`)
  }
}

@UniS10EX9('Класс1')
@UniS10EX9('Класс2')
class MyClass {
  @UniS10EX9('Метод')
  method(@UniS10EX9('Параметр метода') _: any) {
  }

  constructor(@UniS10EX9('Параметр конструктора') _: any) {

  }

  @UniS10EX9('Свойство 3')
  props3?: any

  @UniS10EX9('Свойство 1')
  props?: any

  @UniS10EX9('Свойство static')
  static prop2?: any

  @UniS10EX9('Метод static')
  static method2(@UniS10EX9('Параметр метода static') _: any) {
  }
}

/* Порядок отрабатывания декораторов  */