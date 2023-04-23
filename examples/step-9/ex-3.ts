class UserS9EX3 {
  constructor(public id: number, public name: string) {
  }
}

function getData(id: number): UserS9EX3 {
  return new UserS9EX3(id, 'Вася')
}

type RT = ReturnType<typeof getData>; /* Получает тип этой функции */
type RT2 = ReturnType<() => void>;
type RT3 = ReturnType<<T>() => T>;
type RT4 = ReturnType<<T extends string>() => T>;

type PT = Parameters<typeof getData>[0]; /* Вытащит параметры функции */

type CP = ConstructorParameters<typeof UserS9EX3>; /* получает картеж конструктора от класса */
type IT = InstanceType<typeof UserS9EX3>;
