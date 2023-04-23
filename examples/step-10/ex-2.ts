interface IUserServiceS10EX2 {
  users: number;

  getUsersInDatabase(): number;
}

@nullUserS10EX2 /* Декоратор класса */
@threeUserAdvancedS10EX2
class UserServiceS10EX2 implements IUserServiceS10EX2 {
  users: number = 1000
  getUsersInDatabase(): number {
    return this.users
  }
}

function nullUserS10EX2(target: Function) { /* target - цель декоратора*/
  target.prototype.users = 0 /* присваивает пользователю ноль */
}

function threeUserAdvancedS10EX2<T extends { new(...args: any[]): {} }>(constructor: T) { /* Конструированный класс наследуем анонимный класс, где меняем проведение */
  return class extends constructor {
    users = 3
  }
}

console.log(new UserServiceS10EX2().getUsersInDatabase())