import { db } from "../Data/db"
import { Albumm, CartItem, FavItem } from "../types"

//metods/functions/actions that we going to use
export type CartActions = 
    |{type:"add-to-cart"; payload:{item:Albumm}}
    |{type:"add-to-fav"; payload:{item:Albumm}}
    |{type:"remove-from-cart"; payload:{id:Albumm["id"]}}
    |{type:"decrease-quantity"; payload:{id:Albumm["id"]}}
    |{type:"increase-quantity"; payload:{id:Albumm["id"]}}
    |{type:"clear"}

    //types of my states
export type CartState = {
    data: Albumm[],
    cart:CartItem[],
    fav:FavItem[]
}
//we take data from localStorage
const initialCart =():CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart):[]
}

export const initialState: CartState={
    data: db,
    cart: initialCart(),
    fav: []
}

export const albumReducer = (state:CartState = initialState, action:CartActions) =>{

    if(action.type === "add-to-cart"){
        let updateCart:CartItem[];
        const itemExists = state.cart.find(
            (album) => album.id === action.payload.item.id
        );

        if(itemExists){
            //update
            updateCart = state.cart.map((item)=>{
                if(item.id === action.payload.item.id)
                {
                    if(item.quantity < 5)
                    {
                        return {...item,quantity:item.quantity + 1}
                    }else{
                        return item
                    }
                }else{
                    return item
                }
            });
        }else{
            //insert new album
            const newItem: CartItem ={...action.payload.item,quantity:1}
            updateCart = [...state.cart,newItem]
        }
        return{
            ...state,
            cart:updateCart
        }
    }

    if(action.type === "add-to-fav"){
        let updateFav:CartItem[];
        const itemExists = state.fav.find(
            (album) => album.id === action.payload.item.id
        );
        if(itemExists){
            updateFav = state.fav.map((item)=>{
                if(item.id === action.payload.item.id)
                {
                    if(item.quantity < 5)
                    {
                        return {...item,quantity:item.quantity + 1}
                    }else{
                        return item
                    }
                }else{
                    return item
                }
            });
        }else{
            const newItem: FavItem ={...action.payload.item,quantity:1}
            updateFav = [...state.fav,newItem]
        }
        return{
            ...state,
            fav:updateFav
        }
    }

    if(action.type === "remove-from-cart")
    {
        const updateCart = state.cart.filter(
            (item) => item.id != action.payload.id
        )
        return{
            ...state,
            cart:updateCart
        }
    }

    if(action.type==="decrease-quantity")
    {
        const updateCart = state.cart.map((item) =>{
            if(item.id === action.payload.id && item.quantity > 1)
            {
                return {
                    ...item,
                    quantity:item.quantity -1
                }
            }
            return item
        })
        return {
            ...state,
            cart:updateCart
        }
    }

    if(action.type === "increase-quantity")
    {
        const updateCart = state.cart.map((item) => {
            if(item.id === action.payload.id && item.quantity < 5)
            {
                return {
                    ...item,
                    quantity:item.quantity + 1
                };
            }
            return item
        })
        return {
            ...state,
            cart:updateCart
        }
    }

    if(action.type === "clear")
    {
        return{
            ...state,
            cart:[]
        }
    }

    return state

}
