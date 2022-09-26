export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: string;

  constructor(name: string, speed: string) {
    super(name);

    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}.`;
  }
}

let animal = new Animal('mike');
let lion = new Lion('poti', 'than faster everyone');
console.log(lion.run());
