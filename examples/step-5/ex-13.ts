class UserBuilder {
  name: string

  setName(name: string): this {
    this.name = name
    return this
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[]
}

const resS5EX13 = new UserBuilder().setName('Вася')
const res2S5EX13 = new AdminBuilder().setName('Вася')

let userS5EX13: UserBuilder | AdminBuilder = new UserBuilder()

if (userS5EX13.isAdmin()) {
  console.log(userS5EX13)
} else {
  console.log(userS5EX13)
}

/* Типизация this */