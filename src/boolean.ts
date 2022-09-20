export {};
//jsはモジュールシステムを導入していない場合、グローバル空間に定義されることになる。exportをコメントアウトするとモジュールシステムをなくす意味になる。するとグローバルで使用されている変数を使用してしまう(二度)。exportを使用することでモジュールシステムにすることでエラーを回避している。

let name = '鈴木';

let isFinished: boolean = true;
isFinished = false;
console.log(isFinished);
