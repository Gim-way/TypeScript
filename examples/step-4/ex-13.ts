interface UserS4EX10 {
  name: string;
}

const aS4EX10 = {};

assertUser(aS4EX10);
aS4EX10.name = 'Вася';


function assertUser(obj: unknown): asserts obj is UserS4EX10 {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Не пользователь');
}

function isUser(obj: unknown): obj is UserS4EX10 {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return true;
  }
  return false;
}

/* Asserts - это функции в котором в случаи, если условия не выполняются, кидают какую-то ошибку  */