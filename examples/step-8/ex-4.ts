const a1: number = Math.random() > 0.5 ? 1 : 0

interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const suc: HTTPResponse<'success'> = {
  code: 200,
  data: 'done'
}

const err: HTTPResponse<'failed'> = {
  code: 200,
  data: new Error()
}

class UserS8EX4 {
  id: number
  name: string
}

class UserPersistend extends UserS8EX4 {
  dbId: string
}

function getUser(id: number): UserS8EX4;
function getUser(dbId: string): UserPersistend;
function getUser(dbIdOrId: string | number): UserS8EX4 | UserPersistend {
  if (typeof dbIdOrId === 'number') {
    return new UserS8EX4()
  } else {
    return new UserPersistend()
  }
}

type UserOrUserPersistend<T extends string | number> = T extends number ? UserS8EX4 : UserPersistend;

function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
  if (typeof id === 'number') {
    return new UserS8EX4() as UserOrUserPersistend<T>
  } else {
    return new UserPersistend() as UserOrUserPersistend<T>
  }
}

const resS8EX4 = getUser2(1)
const res2S8EX4 = getUser2('sdfsfd')

/* Conditional Types */