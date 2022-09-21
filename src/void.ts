export {};

//関数内にreturnがない時にvoid。関数には必ずreturnがあるわけではない。
function tg(): void {
  console.log('なんでもないよ');
  //   return;
}

console.log(tg());
