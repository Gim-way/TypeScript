class PaymentS5EX12 {
  private date: Date = new Date()

  getDate(this: PaymentS5EX12) {
    return this.date
  }

  getDateArrow = () => {
    return this.date
  }
}

const p = new PaymentS5EX12()

const userS5EX12 = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDateArrow
}

// console.log(p.getDate());
// console.log(userS5EX12.paymentDate());
// console.log(userS5EX12.paymentDateArrow());

class PaymentPersistentS5EX12 extends PaymentS5EX12 {
  save() {
    return this.getDateArrow()
  }
}

console.log(new PaymentPersistentS5EX12().save())

/* Работа с this */