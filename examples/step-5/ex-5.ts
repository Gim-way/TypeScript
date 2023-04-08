class UserS5EX5 {
  _login: string
  password: string
  createdAt: Date

  set login(l: string | number) {
    this._login = 'user-' + l
    this.createdAt = new Date()
  }

  get login() {
    return this._login
  }

  async getPassword(p: string) {

  }

  // set password(p: string) {
  // 	// sync
  // }
}

const userS5EX5 = new UserS5EX5()
userS5EX5.login = 'myLogin'
console.log(userS5EX5)
console.log(userS5EX5.login)

/* Setter - это метод класса, который используется для установки значения свойства объекта класса.  */
/* Getter - это метод класса, который используется для получения значения свойства объекта класса */
/* Getter и Setter - позволяют дополнить логику добавления и присвоения свойств в нашем объекте*/