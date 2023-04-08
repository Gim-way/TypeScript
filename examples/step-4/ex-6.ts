interface UserS4EX6 {
  login: string;
  password?: string;
}

const userS4EX6: UserS4EX6 = {
  login: 'a@a.ru',
  password: '1'
}

function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first
  }
  return first * second
  /* Сужение типов */
}

multiply(5)


interface UserPropsS4EX6 {
  login: string;
  password?: {
    type: 'primary' | 'secondary'
  }
}

function testPass(user: UserPropsS4EX6) {
  const t1 = user.password?.type
  const s = user.password!.type /* 100% будет пароль, без undefined */
}

function testE4EX6(param?: string) {
  const t2 = param ?? multiply(5)
}

/* Optional (?) - делает опциональным свойство */