export {};

type Text = string;

const fooString: Text = 'Hello';

console.log(fooString);

type Detail = {
  name: string;
  age: number;
};

const ex: Detail = {
  name: 'koki',
  age: 25,
};

// console.log(ex);

type Detail2 = typeof ex;

const ex2: Detail2 = {
  name: 'sato',
  age: 19,
};

console.log(ex2);
