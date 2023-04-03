abstract class Contoller {
  abstract handle(req: any): void;

  handleWithLogs(req: any) {
    console.log('Start');
    this.handle(req);
    console.log('End');
  }
}

class UserController extends Contoller {
  handle(req: any): void {
    console.log(req);
  }
}

// new Contoller() - error
const cS5EX14 = new UserController();
cS5EX14.handleWithLogs('Request');

/* Абстрактные классы */