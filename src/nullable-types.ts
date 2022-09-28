export {};

//tsconfig.json内にある"strictNullChecksをfalseにするとどこの値にもnullを許容するという状態になり、秩序のないコードになってしまうためfalseにしてコメントアウトを外さないこと。ユニオン型でnullabelにすること検討ミサイル
let profile: { name: string; age: number | null } = {
  name: 'koki',
  age: null,
};
