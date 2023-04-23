interface IUserServiceS10H1 {
  users: number

  getUsersDatabase(): number
}

@CreatedAt
class UserServiceS10H1 implements IUserServiceS10H1 {
  users: number = 1000

  getUsersDatabase(): number {
    return this.users
  }
}

function CreatedAt<T extends { new(...args: any): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date()
  }
}
type CreateAt = {
  createAt: Date
}

console.log((new UserServiceS10H1() as IUserServiceS10H1 & CreateAt).createAt)