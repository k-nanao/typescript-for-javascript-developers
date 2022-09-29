export {};

type Profile = {
    name:string;
    age:number;
}

const me:Profile={
    name:'koki',
    age:25
};

me.age++;
console.log(me)

type PersonalDateType = Readonly<Profile>

const friend:PersonalDateType = {
    name:'Tanaka',
    age:28
}

//friend.age++;//エラー