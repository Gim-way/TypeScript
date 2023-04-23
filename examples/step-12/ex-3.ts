interface Prototype<T> {
  clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
  createdAt: Date

  constructor(public email: string, public name: string) {
    this.createdAt = new Date()
  }

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name)
    target.createdAt = this.createdAt
    return target
  }
}

let userS12EX3 = new UserHistory('a@a.ru', 'Антон')
console.log(userS12EX3)
let user2S12EX3 = userS12EX3.clone()
user2S12EX3.email = 'b@b.ru'
console.log(user2S12EX3)
console.log(userS12EX3)

/* Прототип - есть исходный текущий сформированный с данными история пользователя и одним методом хотим склонировать объект  */