export {};

//objectだけだと制約が甘い
let pr: object = {
  name: 'koki',
};

//上といているがこちらでは少し詳細に型指定ができる
let pr2: { name: string } = {
  name: 'suzuki',
};

//nameだけ上書きすることができる
// pr2 = { name: 'jiko' };
