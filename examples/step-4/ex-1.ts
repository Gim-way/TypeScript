const arrEX1 = ['text', 1]

function logIdS4EX1(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id.toLowerCase())
  } else if (typeof id === 'number') {
    console.log(id)
  } else {
    console.log(id)
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err)
  } else {
    console.log(err)
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {

  } else {
    console.log(a)
  }

}

logIdS4EX1(1)
logIdS4EX1('Text')
logIdS4EX1(true)

/* Union Тип может быть string | number | boolean | array | object */