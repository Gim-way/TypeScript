interface IUserServiceS10EX3 {
  users: number;

  getUsersInDatabase(): number;
}

// @nullUserS10EX3
@log()
@setUsersS10EX3(2)
// @threeUserAdvancedS10EX3
// @setUserAdvancedS10EX3(4)
class UserServiceS10EX3 implements IUserServiceS10EX3 {
  users: number = 1000

  getUsersInDatabase(): number {
    return this.users
  }
}

function nullUserS10EX3(target: Function) {
  target.prototype.users = 0
}

function setUsersS10EX3(users: number) {
  console.log('setUsers init')
  return (target: Function) => {
    console.log('setUsers run')
    target.prototype.users = users
  }
}

function log() {
  console.log('log init')
  return (target: Function) => {
    console.log('log run')
    console.log(target)
  }
}

function setUserAdvancedS10EX3(users: number) {
  return <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users
    }
  }
}

function threeUserAdvancedS10EX3<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3
  }
}

console.log(new UserServiceS10EX3().getUsersInDatabase())

/* Фабрика декораторов - некая функция которая возвращает новый декоратор, функция производящий декоратор с разным параметром   */