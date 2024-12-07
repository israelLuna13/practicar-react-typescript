export type Albumm={
    id:number,
    name:string,
    description:string,
    image:string,
    price:number
}

export type CartItem = Albumm &{
    quantity:number
}

export type FavItem = Albumm &{
    quantity:number
}