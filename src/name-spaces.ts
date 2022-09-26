export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const youTokyo = new Japanese.Tokyo.Person('やべっち');
console.log(youTokyo.name);

const meOsaka = new Japanese.Osaka.Person('koki');
console.log(meOsaka.name);

const you = new English.Person('Sam', 'D', 'Totman');
console.log(you);
