enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 's'
}

const resEX8 = {
  message: 'Платёж успешен',
  statusCode: StatusCode.SUCCESS
}

// 1 - успех
// p - в процессе
// s - отклонён

if (resEX8.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {
 return status
}

action(StatusCode.SUCCESS)
action(1)


const enum Roles {
  ADMIN = 1,
  USER = 2,

}

const resRoles = Roles.ADMIN


/* Тип enum. Если  обычный enum определили, то это функция. Если const Enum, то это просто константа поставляющаяся в нужные места
* Enum представляет собой набор логически связанных констант, в качестве значений которых могут выступать как числа, так и строки*/