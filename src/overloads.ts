export {};

//シグネチャは関数の直前に記述する。型制約はシグネチャで行い、関数の実態の方では型制約を行わない。
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));
