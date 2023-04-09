interface IUserServiceS10EX4 {
  users: number;

  getUsersInDatabase(): number;
}

class UserServiceS10EX4 implements IUserServiceS10EX4 {
  users: number = 1000

  @LogS10EX4()
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function LogS10EX4() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    descriptor.value = () => {
      console.log('no error')
    }
  }
}

console.log(new UserServiceS10EX4().getUsersInDatabase())
/* Декоратор, который будет менять поведение того или иного метода */
/* Декоратор метода также представляет функцию, которая принимает три параметра: */
/* Декоратор принимает следующие параметры:
    1. Функция конструктора класса для статического метода, либо прототип класса для обычного метода.
    2. Название метода.
    3. Объект интерфейса PropertyDescriptor: */