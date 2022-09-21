export {};

let numbers: number[] = [1, 2, 3];

// 非推奨
let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let a: number[][] = [
  [50, 70],
  [160, 300],
];

//ユニオンタイプス
let b: (string | number | boolean)[] = [1, false, 'Japan'];
