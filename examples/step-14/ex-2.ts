interface Mediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: Mediator

  setMediator(mediator: Mediator) {
    this.mediator = mediator
  }
}

class Notifications {
  send() {
    console.log('Отправляю уведомление')
  }
}

class LogS14EX2 {
  log(message: string) {
    console.log(message)
  }
}

class EventHandler extends Mediated {
  myEvent() {
    this.mediator.notify('EventHandler', 'myEvent')
  }
}

class NotificationMediator implements Mediator {
  constructor(
    public notifications: Notifications,
    public logger: LogS14EX2,
    public handlerS14EX2: EventHandler
  ) {
  }


  notify(_: string, event: string): void {
    switch (event) {
    case 'myEvent':
      this.notifications.send()
      this.logger.log('Отправлено')
      break
    }
  }
}

const handlerS14EX2 = new EventHandler()
const loggerS14EX2 = new LogS14EX2()
const notificationsS14EX2 = new Notifications()

const m = new NotificationMediator(
  notificationsS14EX2,
  loggerS14EX2,
  handlerS14EX2
)
handlerS14EX2.setMediator(m)
handlerS14EX2.myEvent()

/* Mediator - позволяет реализовать эффективное взаимодействие между несколькими компонентами, которые
* должны быть сильно связаны с друг другом(в рандомно порядке) и позволяет модерировать фактически взаимодействие */