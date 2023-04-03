class UserS5EX9 {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class UsersS5EX9 extends Array<UserS5EX9> {
  searchByNameS5EX9(name: string) {
    return this.filter(u => u.name === name)
  }

  override toString(): string {
    return this.map(u => u.name)
      .join(', ')
  }
}

const usersS5EX9 = new UsersS5EX9()
usersS5EX9.push(new UserS5EX9('Вася'))
usersS5EX9.push(new UserS5EX9('Петя'))
console.log(usersS5EX9.toString())

class UserListS5EX9 {
  users: UserS5EX9[]

  push(u: UserS5EX9) {
    this.users.push(u)
  }
}

class PaymentS5EX9 {
  date: Date
}

class UserWithPayment extends PaymentS5EX9 {
  name: string
}

class UserWithPayment2 {
  user: UserS5EX9
  payment: PaymentS5EX9

  constructor(user: UserS5EX9, payment: PaymentS5EX9) {
    this.payment = payment
    this.user = user
  }
}

/* Композиция против наследования */