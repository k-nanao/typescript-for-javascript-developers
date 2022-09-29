export {};

// Record<K, T> Kにはユニオン型

type Prefecture = 'Tokyo' | 'Chiba' | 'Shimane';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefecture, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1200 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 1100 },
  Shimane: { kanji_name: '島根', confirmed_cases: 800 },
};

console.log(covid19Japan);
