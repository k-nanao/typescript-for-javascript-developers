export {};

//Exclude除外する
type DebugType = () => boolean;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
//Functionは関数をひっくるめて除外する
type TypeFunction = Exclude<SomeTypes, Function>;

//Extract抽出する
type FunctionTypeA = Extract<SomeTypes, DebugType>;
type FunctionTypeB = Extract<SomeTypes, string | number>;
type FunctionTypeC = Extract<SomeTypes, Function>;

//nullやundifinedを排除
type NonNullFunction = string | number | null | undefined;
type NonNullFunctionA = NonNullable<NonNullFunction>;
