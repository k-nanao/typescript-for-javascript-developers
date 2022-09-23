export {};

//関数に引数が渡されない場合やundefinedが渡された場合に設定したりする
const nextYearSalary = (currentSalary: number, rate: number = 1.08) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
