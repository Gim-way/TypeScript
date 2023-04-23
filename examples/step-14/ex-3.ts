class UserS14EX3 {
  constructor(public userId: number) {
  }
}

class CommandHistory {
  public commands: Command[] = []

  push(command: Command) {
    this.commands.push(command)
  }

  remove(command: Command) {
    this.commands = this.commands.filter(c => c.commandId !== command.commandId)
  }
}

abstract class Command {
  public commandId: number

  abstract execute(): void;

  protected constructor(public history: CommandHistory) {
    this.commandId = Math.random()
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: UserS14EX3,
    private receiver: UserServiceS14EX3,
    history: CommandHistory
  ) {
    super(history)
  }

  execute(): void {
    this.receiver.saveUser(this.user)
    this.history.push(this)
  }

  undo() {
    this.receiver.deleteUser(this.user.userId)
    this.history.remove(this)
  }
}

class UserServiceS14EX3 {
  saveUser(user: UserS14EX3) {
    console.log(`Сохраняю пользователя с id ${user.userId}`)
  }

  deleteUser(userId: number) {
    console.log(`Удаляем пользователя с id ${userId}`)
  }
}

class ControllerS14EX3 {
  receiver: UserServiceS14EX3
  history: CommandHistory = new CommandHistory()

  addReceiver(receiver: UserServiceS14EX3) {
    this.receiver = receiver
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new UserS14EX3(1),
      this.receiver,
      this.history
    )
    addUserCommand.execute()
    console.log(addUserCommand.history)
    addUserCommand.undo()
    console.log(addUserCommand.history)
  }
}

const controllerS14EX3 = new ControllerS14EX3()
controllerS14EX3.addReceiver(new UserServiceS14EX3())
controllerS14EX3.run()

/* Command - позволяет вынести часть логики передачи в команды, и не напрямую взаимодействовать один
объект с другим другом, а в Command  */