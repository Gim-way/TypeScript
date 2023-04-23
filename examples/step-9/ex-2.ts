interface PaymentPersistentS9EX2 {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type PaymentS9EX2 = Omit<PaymentPersistentS9EX2, 'id'>; /* Исключает из интерфейса ключ  */
type PaymentRequisits = Pick<PaymentPersistentS9EX2, 'from' | 'to'>; /* получаем только конкретные ключи */

type ExtractEx = Extract<'from' | 'to' | PaymentS9EX2, string>; /* Вытаскивает ключи с определенным типом  */
type ExcludeEx = Exclude<'sum'| PaymentPersistentS9EX2, number>; /* 'sum'| PaymentPersistentS9EX2 - исключаем тип number  */