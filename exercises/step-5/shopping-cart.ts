class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {
  }
}

class Delivery {
  constructor(
    public date: Date
  ) {
  }
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date)
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date())
  }
}

type DeliveryOption = HomeDelivery | ShopDelivery

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOption

  public addProduct(product: Product): void {
    this.products.push(product)
  }

  public deleteProductById(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId)
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2, 0)
  }

  public setDelivery(delivery: DeliveryOption): void {
    this.delivery = delivery
  }

  public checkOut() {
    if (this.products.length === 0) {
      throw new Error('Нет товара в корзине')
    }
    if (!this.delivery) {
      throw new Error('Не указан способ доставки')
    }
    return { success: true }
  }
}

const cart = new Cart()
cart.addProduct(new Product(1, 'Печенье', 10))
cart.addProduct(new Product(1, 'Торт', 30))
cart.addProduct(new Product(1, 'Шоколад', 50))
cart.deleteProductById(1)
cart.setDelivery(new HomeDelivery(new Date(), 'Moscow'))
console.log(cart.getSum())
console.log(cart.checkOut())