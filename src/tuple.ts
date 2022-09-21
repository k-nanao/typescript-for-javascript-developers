export {};

//tuple型は型に厳格性を付与する。共用型だと順序性に型の厳格性がない。下記だと(string | number)[]これは順序が逆になった時でも大丈夫になってしまう。tuple型で順序が逆になっても型の厳格性を持たせる。
let p: [string, number] = ['koki', 25];
