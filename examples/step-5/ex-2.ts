class UserS5EX2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const userS5EX2 = new UserS5EX2('Вася');
console.log(userS5EX2);
userS5EX2.name = 'Петя';
console.log(userS5EX2);

class AdminS5EX2 {
  role: number;
}
const adminS5EX2 = new AdminS5EX2();
adminS5EX2.role = 1;

/* Создаём Class в TypeScript */