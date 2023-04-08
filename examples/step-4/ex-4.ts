interface UserS4EX4 {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string;
}

interface RoleS4EX4 {
  roleId: number;
}

interface UserWithRoleS4EX4 extends UserS4EX4, RoleS4EX4 {
  createdAt: Date;
}

type User2 = {
  name: string,
  age: number,
  skills: string[]

  log: (id: number) => string;
}


let userS4EX4: UserWithRoleS4EX4 = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),

  log(id) {
    return ''
  }
}

interface UserDic {
  [index: string]: UserS6EX5
}

type UserDic2 = {
  [index: number]: UserS6EX5
}

/* Interface - запись Типов. В interface должны extends, если ходим объединить два типа   */