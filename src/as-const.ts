export {};

let name = 'koki';

//実質定数
let nickname = 'nanao' as const;

//readonly属性になる。readonlyにしたい時にas constを利用すると便利
let profile = {
  name: 'koki',
  height: 167,
} as const;
