interface Payment {
  sum: number
  from: number
  to: number
}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed'
}

interface RequestPayment extends Payment {
}

interface DataPaymentSuccess extends Payment {
  databaseId: number,
}

interface DataPaymentFailed {
  errorMessage: string,
  errorCode: number
}


interface ResponsePaymentSuccess {
  status: PaymentStatus.SUCCESS
  data: DataPaymentSuccess
}

interface ResponsePaymentFailed {
  status: PaymentStatus.FAILED
  data: DataPaymentFailed
}
