export {};

export {};

class Person {
  public name: string;
  //   private age: number;
  protected age: number;
  protected nationality: string;

  //コンストラクタはreturnはない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let Taro = new Person('taro', 30, 'Japan');

console.log(Taro.profile());
console.log(Taro.name);

//情報をアクセスすることができるが、隠したい時にアクセス修飾子で制限することができる

//privateだと上記の記述だとPersonからじゃないとアクセスできない。Androidはprotectedだとアクセスできるけど、privateはできない。
