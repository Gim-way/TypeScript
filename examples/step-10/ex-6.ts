interface IUserServiceS10Ex6 {
  getUsersInDatabase(): number;
}

class UserServiceS10EX6 implements IUserServiceS10Ex6 {
  private _users: number

  @LogS10EX6()
  set users(num: number) {
    this._users = num
  }

  get users() {
    return this._users
  }

  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function LogS10EX6() {
  return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const set = descriptor.set
    descriptor.set = (...args: any) => {
      console.log(args)
      set?.apply(target, args)
    }
  }
}

const userService = new UserServiceS10EX6()
userService.users = 1
console.log(userService.users)
