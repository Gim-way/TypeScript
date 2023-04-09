class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }
    if (error) {
      this.error = error;
    }
  }
}

const resS7EX5 = new Resp<string, number>('data');

class HTTPResp<F> extends Resp<string, number>  {
  code: F;

  setCode(code: F) {
    this.code = code;
  }
}

const res2S7EX5 = new HTTPResp();

/* Generic в классах */