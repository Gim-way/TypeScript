type PaymentStatusS5EX8 = 'new' | 'paid';

class PaymentS5EX8 {
  id: number
  status: PaymentStatusS5EX8 = 'new'

  constructor(id: number) {
    this.id = id
  }

  pay() {
    this.status = 'paid'
  }
}

class PersistedPaymentS5EX8 extends PaymentS5EX8 {
  databaseId: number
  paidAt: Date

  constructor() {
    const id = Math.random()
    super(id)
  }

  save() {
    // Сохраняет в базу
  }

  override pay(date?: Date) {
    super.pay()
    if (date) {
      this.paidAt = date
    }
  }
}

new PersistedPaymentS5EX8()


class UserS5EX8 {
  name: string = 'user'

  constructor() {
    console.log(this.name)
  }
}

class AdminS5EX8 extends UserS5EX8 {
  name: string = 'admin'

  constructor() {
    super()
    console.log(this.name)
  }
}

new AdminS5EX8()

// new Error('');

class HttpErrorS5EX8 extends Error {
  code: number

  constructor(message: string, code?: number) {
    super(message)
    this.code = code ?? 500
  }
}

/* Особенности наследования  */