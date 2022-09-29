export {};

type Profile = {
  name: string;
  age?: number;
  zipcode: number;
};

//Partialを用いることでオプショナルな複製ができる
type PartialType = Partial<Profile>;

//Requiredを用いることで必須の方を複製できる
type RequiredType = Required<Profile>;
