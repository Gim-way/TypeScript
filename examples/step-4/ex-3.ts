type User = {
  name: string,
  age: number,
  skills: string[]
}
type Role = {
  name: string;
  id: number;
}
type UserWithRole = {
  user: User,
  role: Role
}


/* let userS4EX3: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1
} */

/* Type Alias - эффективно записываем типы*/