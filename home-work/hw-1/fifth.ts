class Rectangle {
  private readonly width: number
  private readonly height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(10, 20)
console.log(rectangle.getArea())
