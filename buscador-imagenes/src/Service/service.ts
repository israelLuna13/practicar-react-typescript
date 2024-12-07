import axios from "axios"
import { searchImage,Image } from "../types"
const registroPorPagina = 10
const paginaActual =1
const key = import.meta.env.VITE_API_KEY

//46376367-dca5d0ce0554fa11e1cbecf72

export async function imageSearch(search:searchImage){
  
    try {
        const url =`https://pixabay.com/api/?key=${key}&q=${search}&per_page=${registroPorPagina}&page=${paginaActual}`

        const {data} = await axios(url)
        const datos = data.hits
        console.log(datos);
        const result = Image.safeParse(datos)
        console.log(result);
        
        if(result.success){
            return result.data
        }

    } catch (error) {
        console.log(error);
    }

}