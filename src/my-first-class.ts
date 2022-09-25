export {};

class Person {
  name: string;
  age: number;

  //コンストラクタはreturnはない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let Taro = new Person('Taro', 30);

console.log(Taro.profile());
