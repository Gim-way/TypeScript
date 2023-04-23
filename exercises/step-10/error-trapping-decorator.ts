interface IUserServiceS10H2 {
  users: number;

  getUsersInDatabase(): number;
}

class UserServiceS10H2 implements IUserServiceS10H2 {
  users: number = 1000

  @CatchS10H2({rethrow:true})
  getUsersInDatabase(): number {
    throw new Error('Ошибка')
  }
}

function CatchS10H2({rethrow}: {rethrow:boolean}= {rethrow: true}) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value
    descriptor.value = (...args: any[]) => {
      try {
        return method?.apply(target, args)
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message)
          if (rethrow) {
            throw e
          }
        }
      }
    }
  }
}

console.log(new UserServiceS10H2().getUsersInDatabase())
