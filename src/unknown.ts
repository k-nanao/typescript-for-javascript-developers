export {};

const k = (): number => {
  return 43;
};

let numberAny: any = k();
let numberUnknown: unknown = k();

let someAny = numberAny + 10;

//タイプガード(型ガード)
if (typeof numberUnknown === 'number') {
  let someUnknown = numberUnknown + 10;
}
