

const numS7EX1: Array<number> = [1, 2, 3]

async function testS7EX1() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

const checkS7EX1: Record<string, boolean> = {
  drive: true,
  kpp: false
}

/* Пример встроенных generic  */