export {};

interface ObjectType {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'ken',
  age: 45,
};

console.log(object);

//typescriptの最大の目的は型安全と言っても過言ではない。JavaScriptでは
//let isFinished: boolean = true;
//isFinished = 1;　これはエラーになるはずだが、JSではエラーにならず、実行される。それを回避するために型安全の概念を取り入れたい。
