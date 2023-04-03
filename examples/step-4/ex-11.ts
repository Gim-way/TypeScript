let aS4EX11 = 5
let bS4EX11: string = aS4EX11.toString()
let eS4EX11: string = new String(aS4EX11).valueOf()
let fS4EX11: boolean = new Boolean(aS4EX11).valueOf()

let cS4EX11 = 'sdfs'
let dS4EX11: number = parseInt(cS4EX11)

interface UserS4EX11 {
  name: string
  email: string
  login: string
}

const userS4EX11: UserS4EX11 = {
  name: 'Вася',
  email: 'vasiliy@yandex.ru',
  login: 'vasia'
}

interface AdminS4EX11 {
  name: string
  role: number
}


const adminS4EX11: AdminS4EX11 = {
  ...userS4EX11,
  role: 1
}

function userToAdmin(userS4EX11: UserS4EX11): AdminS4EX11 {
  return {
    name: userS4EX11.login,
    role: 1
  }
}

/* Приведение типов - преобразуем тип в нужный и делаем присвоение, это для простых примеров */