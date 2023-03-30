function getFullName(firstname:string , surname: string ):string {
  return `${firstname} ${surname}`
}


const getFullNameArrow = (firstname: string, surname: string): string  => `${firstname} ${surname}`

console.log(getFullName('Mikhail','Timashov'))

/* Написали как записываются типы для функций */