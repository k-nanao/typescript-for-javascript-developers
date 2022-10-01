export {};


type Detail = {
    name:string;
    height:number;
    weight:number;
}

type Simple = Pick<Detail, 'name' | 'weight'>

type Small = Omit<Detail,'name'>