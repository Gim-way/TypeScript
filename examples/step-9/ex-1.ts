interface UserS9EX1 {
  name: string;
  age?: number;
  email: string;
}

type patrial = Partial<UserS9EX1> /*  все свойства не обязательны */
const pS9EX1: patrial = {} /* надо быть аккуратным, пустой объект будет валидным */

type required = Required<UserS9EX1> /* все поля обязательными */
type readonly = Readonly<UserS9EX1> /* все поля только для чтения */
type requiredAndReadonly = Required<Readonly<UserS9EX1>> /* обязательные и только для чтения */