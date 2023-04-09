interface RoleS8EX3 {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface UserS8EX3 {
  name: string;
  roles: RoleS8EX3[];
  permission: Permission;
}

const userS8EX3: UserS8EX3 = {
  name: 'Вася',
  roles: [],
  permission: {
    endDate: new Date()
  }
}

const nameUser = userS8EX3['name']
let roleNames: 'roles' = 'roles'

type rolesType = UserS8EX3['roles'];
type rolesType2 = UserS8EX3[typeof roleNames];

type roleType = UserS8EX3['roles'][number];
type dateType = UserS8EX3['permission']['endDate'];

const roles = ['admin', 'user', 'super-user'] as const
type roleTypes = typeof roles[number];

/* Indexed Access Types - typeof можем делать обращение индексу */