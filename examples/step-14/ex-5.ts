class UserS14EX5 {
  githubToken: string
  jwtToken: string
}

interface AuthStrategy {
  auth(user: UserS14EX5): boolean;
}

class Auth {
  constructor(private strategy: AuthStrategy) {
  }

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy
  }

  public authUser(user: UserS14EX5): boolean {
    return this.strategy.auth(user)
  }
}

class JWTStrategy implements AuthStrategy {
  auth(user: UserS14EX5): boolean {
    if (user.jwtToken) {
      return true
    }
    return false
  }
}

class GithubStrategy implements AuthStrategy {
  auth(user: UserS14EX5): boolean {
    if (user.githubToken) {
      // Идём в API
      return true
    }
    return false
  }
}

const userS14EX5 = new UserS14EX5()
userS14EX5.jwtToken = 'token'
const authS14EX5 = new Auth(new JWTStrategy())
console.log(authS14EX5.authUser(userS14EX5))
authS14EX5.setStrategy(new GithubStrategy())
console.log(authS14EX5.authUser(userS14EX5))

/* Strategy - позволяет реализовывать наборы стратеги, которые мы можем взаимозаменять прямо налету */