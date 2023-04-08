interface UserProps {
  firstname: string,
  surname: string,
  city: string,
  age: number
  skills: SkillsProps
}

interface SkillsProps {
  dev: boolean,
  devops: boolean
}

const user: UserProps = {
  firstname: 'Mikhail',
  surname: 'Timashov',
  city: 'Moscow',
  age: 33,
  skills: {
    dev: true,
    devops: true,
  },
}

function getFullName(userEntity: UserProps): string {
  return `${userEntity.firstname} ${userEntity.surname}`
}

console.log(getFullName(user))

/* Типизируем объект */