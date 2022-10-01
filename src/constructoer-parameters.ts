export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['koki', 25];
const Koki = new Person(...profile);

console.log(Koki);
