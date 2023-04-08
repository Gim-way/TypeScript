interface OfficeInformation {
  officeId: number,
  isOpened: boolean
  contacts: contactsProps
}

interface contactsProps {
  phone: string,
  email: string,
  address: addressProps
}

interface addressProps {
  city: string
}

let info: {
  officeId: number,
  isOpened: boolean,
  contacts: {
    phone: string,
    email: string,
    address: {
      city: string
    }
  }
} = {
  'officeId': 45,
  'isOpened': false,
  'contacts': {
    'phone': '+79100000000',
    'email': 'my@email.ru',
    'address': {
      'city': 'Москва'
    }
  }
}

/* Типизируем объект из JSON */