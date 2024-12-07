import { create } from "zustand"
import { searchImage } from "./types"
import { imageSearch } from "./Service/service"

//initial value
const initialState={
    hits:[
        {
            largeImageURL: '',
            previewURL: '',
            likes: 0,
            views: 0,
        }
    ]
}
//state
//my state must have all stuff that my store will need
type ImagenState = typeof initialState &{
    fetchImage:(search:searchImage)=>Promise<void>
}

//store zustand
export const UseImagenStore = create<ImagenState>((set) =>({

    ...initialState,
    
    fetchImage:async(search)=>{
        //after each query we clean the data and back the state for initial value
        //default value
        set({hits:initialState.hits})

        //get response fo our service
        const images = await imageSearch(search)
        set({hits:images})
    }
}));

