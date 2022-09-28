export {};

//ここでのindexはキーのことを言い、それが文字列ということになる。ここで設定されているプロパティは初期化なので必須項目になる
interface Profile {
  [index: string]: string | number | boolean;
  name: string;
  underTwenty: boolean;
}

let profile: Profile = { name: 'koki', underTwenty: false };

//インデックスシグネチャの書き方
//{[index:typeForIndex]: typeForValue}

// profile.name = 'koki';
// profile.age = 25;
// profile.natinality = 'Japan';
