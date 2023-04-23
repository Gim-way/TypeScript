class ShapeHW2 {
  area(): number {
    throw new Error('Method not implemented.')
  }
}

class CircleHW2 extends ShapeHW2 {
  constructor(private radius: number) {
    super()
  }

  area(): number {
    return Math.PI * this.radius ** 2
  }
}

class RectangleHW2 extends ShapeHW2 {
  constructor(private width: number, private height: number) {
    super()
  }

  area(): number {
    return this.width * this.height
  }
}

// Пример использования

const circleHW2 = new CircleHW2(5)
const rectangleHW2 = new RectangleHW2(10, 20)

console.log(circleHW2.area()) // Выводит 78.53981633974483
console.log(rectangleHW2.area()) // Выводит 200
