import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//any型は型推論ができなくて、anyにしているためちゃんと指定してくれということ

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = response.data;
  console.log(data);
});
