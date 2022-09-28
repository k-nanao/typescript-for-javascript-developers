export {};

let fooCompatible: any; //any型は型に互換性があり、string型を代入されるとstrin型になってしまう。
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible = barInCompatible; 型の互換性がないため代入できない方を意識してコーディングを行なっていく必要がある

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1997 = 1997;
fooNumber = fooNumberLiteral;
