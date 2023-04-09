class Engine {
  power: number
  cylinders: number
  fuelType: string

  constructor(power: number, cylinders: number, fuelType: string) {
    this.power = power
    this.cylinders = cylinders
    this.fuelType = fuelType
  }
}

class Car {
  make: string
  model: string
  engine: Engine

  constructor(make: string, model: string, engine: Engine) {
    this.make = make
    this.model = model
    this.engine = engine
  }

  start() {
    console.log(`Starting ${this.make} ${this.model} with ${this.engine.power}HP ${this.engine.cylinders}-cylinder ${this.engine.fuelType} engine`)
  }
}

// Создаем объекты двигателя и автомобиля
const engine = new Engine(200, 4, 'gasoline')
const car = new Car('Toyota', 'Camry', engine)

car.start() // Выводит "Starting Toyota Camry with 200HP 4-cylinder gasoline engine"
