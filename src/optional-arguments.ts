export {};

let bmi: (weight: number, height: number, printable?: boolean) => number = (
  weight: number,
  height: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(50, 1.67);

//bmi(身長,体重,console.logで出力するかどうか)
//bmi(身長,体重,true)
//bmi(身長,体重,false)
//bmi(身長,体重)  画面に出力されない
