let input: unknown

input = 3
input = ['sf', 'sdf']

function runS4EX8(i: unknown) {
  if (typeof i == 'number') {
    i++
  } else {
    i
  }
}

runS4EX8(input)


async function getData() {
  try {
    await fetch('')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

async function getDataForce() {
  try {
    await fetch('')
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

type U1 = unknown | number;

type I1 = unknown & string;

/* Unknown - означает не знаем, что лежит в переменной */