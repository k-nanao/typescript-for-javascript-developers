export {};

type p = {
  throwingSpeed: number;
};

type b = {
  battingSpeed: number;
};

type TwoWayPlayer = p & b;

const sasaki: p = {
  throwingSpeed: 154,
};

const ochiai: TwoWayPlayer = {
  throwingSpeed: 138,
  battingSpeed: 0.367,
};
