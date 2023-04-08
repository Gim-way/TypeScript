interface UserS4EX12 {
  name: string
  email: string
  login: string
}

const userS4EX12: UserS4EX12 = {
  name: 'Вася',
  email: 'vasiliy@yandex.ru',
  login: 'vasia'
}

interface AdminS4EX12 {
  name: string
  role: number
}

function logIdS4EX12(id: string | number) {
  if (isStringS4EX12(id)) {
    console.log(id)
  } else {
    console.log(id)
  }
}

function isStringS4EX12(x: string | number): x is string {
  return typeof x === 'string'
}

function isAdmin(userS4EX12: User | AdminS4EX12): userS4EX12 is AdminS4EX12 {
  return 'role' in userS4EX12
}

function isAdminAlternative(userS4EX12: User | AdminS4EX12): userS4EX12 is AdminS4EX12 {
  return (userS4EX12 as AdminS4EX12).role !== undefined
}

function setRoleZero(userS4EX12: User | AdminS4EX12) {
  if (isAdmin(userS4EX12)) {
    userS4EX12.role = 0
  } else {
    throw new Error('Пользователь не админ')
  }
}

/* Type Guard - это правила, которые помогают выводу типов определить суженный диапазон типов для значения, принадлежащего к типу Union */