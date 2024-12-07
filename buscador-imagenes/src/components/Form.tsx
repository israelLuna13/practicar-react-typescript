import { useState } from "react"
import { UseImagenStore } from "../storeZustando"
import { searchImage } from "../types"
import ErrorMessage from "./MessageError"

export default function Form() {
     
    const resultado = UseImagenStore(state => state.fetchImage)
    
    //state for message error
    const [alert,setAlert]=useState('')

    //state for search
    const [search,setSearch] = useState<searchImage>({
      stuff:''
    })
  
    //the content of the input we put in the state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement> ) =>{
      setSearch({
          ... search, [e.target.name]:e.target.value
      })
  }
  //when sent the data form we check that data doesn't null or ''
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(Object.values(search).includes('')){
        setAlert('The search is required');
        return
      }
      setAlert('');
      resultado(search)
    }
    return (
      <>
      <div className="w-1/2">
      <form className="space-y-4 bg-slate-100 p-6 rounded-lg shadow-md " action="" onSubmit={handleSubmit}>
          {alert && <ErrorMessage>{alert}</ErrorMessage>}
          <div className="flex flex-col">
          <label className="field" htmlFor="stuff">Buscar</label>
          <input id="stuff" name="stuff" type="text" value={search.stuff} onChange={handleChange} />

          </div>
          <div className="text-right">
    <input
      type="submit"
      value="Buscar"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
          
        </form>

      </div>
       
      </>
    )
}
