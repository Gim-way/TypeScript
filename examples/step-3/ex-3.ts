function getFullNameEX3(firstname: string, surname: string): string {
  return `${firstname} ${surname}`
}


const getFullNameArrowEX3 = (firstname: string, surname: string): string => `${firstname} ${surname}`

console.log(getFullNameEX3('Mikhail', 'Timashov'))

/* Написали как записываются типы для функций */