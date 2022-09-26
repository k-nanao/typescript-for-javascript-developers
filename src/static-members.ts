export {};

//staticは静的メンバー。それ以外は動的メンバー
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Koki';
  static lastName: string = 'Nanao';

  static work() {
    return `Hey,Siri My name is ${this.firstName}`;
  }
}

console.log(Me.work());

// let me = new Me();
// console.log(me.isProgrammer);
