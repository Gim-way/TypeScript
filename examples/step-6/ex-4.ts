function test(a:number):number {
 return a
}
const lol = 5
/* "noImplicitAny": true - запрещает неявно задавать параметры функции */
type StrOrNumFunc = (a: number | string) => number

// let f: StrOrNumFunc = test;

// test.apply(undefined, [1, 3]);

class A {
  b: number;

  test() {
    return function () {
      // this.b = 5;
    }
  }
}

try {

} catch (e) {
  // console.log(e.message);
}