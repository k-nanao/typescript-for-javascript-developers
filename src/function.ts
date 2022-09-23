export {};

//typescriptで関数で気をつけることは引数とreturn

function BMI(weight: number, height: number): number {
  return weight / (height * height);
}

console.log(BMI(1.67, 50));
