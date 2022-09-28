export {};

// const echo = (arg:number):number =>{
//     return arg;
// }

// const echo = (arg:string):string =>{
//     return arg;
// }

// const echo = <T>(arg: T): T => {
//   return arg;
// };

// console.log(echo<number>(100));
// console.log(echo<string>('yooo'));
// console.log(echo<boolean>(true));

// class Mirror<T> {
//   constructor(public value: T) {}

//   echo(): T {
//     return this.value;
//   }
// }

// const onMirror = new Mirror<string>('こんにちは');

// console.log(onMirror.echo());

interface Mirror<T> {
  value: T;
}

class inMirror implements Mirror<string> {
  constructor(public value: string) {}

  echo(): string {
    return this.value;
  }
}

const upperMirror = new inMirror('こんばんは');

console.log(upperMirror.echo());
