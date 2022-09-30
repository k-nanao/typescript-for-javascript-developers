export {};

//Exclude除外する
type DebugType = () => boolean;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;

//Extract抽出する
type FunctionTypeA = Extract<SomeTypes, DebugType>;

//nullやundifinedを排除
type NonNullFunction = string | number | null | undefined;
type NonNullFunctionA = NonNullable<NonNullFunction>;
