interface IUserServiceS10EX1 {
  users: number;

  getUsersInDatabase(): number;
}

class UserServiceS10EX1 implements IUserServiceS10EX1 {
  users: number = 1000

  getUsersInDatabase(): number {
    return this.users
  }
}

function nullUser(obj: IUserServiceS10EX1) {
  obj.users = 0
  return obj
}

function logUsers(obj: IUserServiceS10EX1) {
  console.log('Users: ' + obj.users)
  return obj
}

console.log(new UserServiceS10EX1().getUsersInDatabase())
console.log(nullUser(new UserServiceS10EX1())
  .getUsersInDatabase())
console.log(logUsers(nullUser(new UserServiceS10EX1()))
  .getUsersInDatabase())
console.log(nullUser(logUsers(new UserServiceS10EX1()))
  .getUsersInDatabase())

/* Паттерн декораторов - позволяет обернуть наш объект в функцию которую модифицирует его поведение */