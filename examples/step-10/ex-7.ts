interface IUserServiceS10EX7 {
  getUsersInDatabase(): number;
}

class UserServiceS10EX7 implements IUserServiceS10EX7 {
  private _users: number

  getUsersInDatabase(): number {
    return this._users
  }

  setUsersInDatabase(@PositiveS10EX7() num: number, @PositiveS10EX7() _: number): void {
    this._users = num
  }
}

function PositiveS10EX7() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(target)
    console.log(propertyKey)
    console.log(parameterIndex)
  }
}

const userServiceS10EX7 = new UserServiceS10EX7()

