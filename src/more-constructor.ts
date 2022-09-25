export {};

// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const me = new Person('koki', 25);

//初期化処理の省略化

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('koki', 25);

console.log(me);
