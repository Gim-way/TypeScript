let strOrNum: string | number;

if (Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = 'str';
}

if (typeof strOrNum === 'string') {
  console.log(strOrNum);
} else {
  console.log(strOrNum);
}

let str20rNum: typeof strOrNum

const userS8EX2 = {
  name: 'Вася'
}

type keyOfUser = keyof typeof userS8EX2

/* typeof - позволяет перевести переменную в её тип */