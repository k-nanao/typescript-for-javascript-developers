export {};

//例外処理なのでreturn文で返すことはない
//例外処理の時にはnever？？とすればいいのかな(戻ってこないような関数のアノーテーションはnever)
function error(message: string): never {
  throw new Error(message);
}

//voidとneverの違いはvoid値は返ってくるが、neverは値がないことを証明する。neverはそもそも帰ってこない。
