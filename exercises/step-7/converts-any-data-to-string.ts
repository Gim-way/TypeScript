function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString()
  }
  switch (typeof data){
  default:
    return undefined
  case 'string':
    return data
  case 'number':
  case 'symbol':
  case 'bigint':
  case 'boolean':
  case 'function':
    return data.toString()
  case "object":
    return JSON.stringify(data)
  }
}

console.log(toString(12))
console.log(toString('lol'))
console.log(toString(true))
console.log(toString(['a','b']))
console.log(toString({a:1}))

/* Функция принимает любой тип и возвращает его строковое представление. Если не может, то возвращает undefined */