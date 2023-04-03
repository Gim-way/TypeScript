const nS4EX10: null = null
const n1S4EX10: any = null
/*
const n2S4EX10: number = null
const n3S4EX10: string = null
const n4S4EX10: boolean = null
const n5S4EX10: undefined = null
*/
interface UserS4EX10 {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null
  } else {
    return {
      name: 'Вася'
    } as UserS4EX10
  }
}

const userS4EX10 = getUser()
if (userS4EX10) {
  const n55S4EX10 = userS4EX10.name
}

/* Null означает ничего */