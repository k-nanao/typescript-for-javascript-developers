export {};

//省略かの書き方ではreadonlyはpublicなどの記述後に記述する必要がある
class VisaCard {
  constructor(public readonly owner: string) {}
}

let MyVisaCard = new VisaCard('koki');
console.log(MyVisaCard.owner);
