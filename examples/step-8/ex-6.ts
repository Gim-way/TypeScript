type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  customers?: Modifier,
  projects?: Modifier,
  adminPanel?: Modifier,
}

type ModifierToAccess<Type> = {
  +readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccess-adminPanel'>]-?: boolean;
}

type UserAccess2 = ModifierToAccess<UserRoles>;


type UserAccess1 = {
  customers?: boolean,
  projects?: boolean,
  adminPanel?: boolean,
}

/* Mapped Types  */