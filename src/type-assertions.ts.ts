export {};

let name: any = 'koki';

let length = name.length as string;

length = 'foo';

//型アサーションはできるだけ避けて。TypeScriptが提供する型安全性を意図的に破壊する機能。いつ使うのかはユニオン型の型の絞り込みは強力な機能だが、いつでも完全に機能するわけでもありません。期待した時でもうまく推論してくれない時があるのでその際に型アサーションを使用する。
