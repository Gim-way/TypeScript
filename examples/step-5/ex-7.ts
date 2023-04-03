type PaymentStatusS5EX7 = 'new' | 'paid';

class PaymentS5EX7 {
  id: number;
  status: PaymentStatusS5EX7 = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class PersistedPaymentS5EX7 extends PaymentS5EX7 {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // Сохраняет в базу
  }

  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

new PersistedPaymentS5EX7();

/* Extends - зависимости от одного класса к другому принимая его зависимости */