export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('koki', 25);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['グロリア', 76];
