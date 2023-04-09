interface IUserServiceS10EX5 {
  users: number;

  getUsersInDatabase(): number;
}

class UserServiceS10EX5 implements IUserServiceS10EX5 {
  @Max(100)
  users: number

  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function Max(max: number) {
  return (
    target: Object,
    propertyKey: string | symbol
  ) => {
    let value: number
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`)
      } else {
        value = newValue
      }
    }

    const getter = function () {
      return value
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}

const userServiceS10EX5 = new UserServiceS10EX5()
userServiceS10EX5.users = 1
console.log(userServiceS10EX5.users)
userServiceS10EX5.users = 1000
console.log(userServiceS10EX5.users)

/* Декоратор свойства представляет функцию, которая принимает два параметра:
* Где первый параметр представляет конструктор класса, если свойство статическое, либо прототип класса, если свойство нестатическое. А второй параметр представляет имя свойства. */