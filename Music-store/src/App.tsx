import { useEffect, useReducer } from "react"
import Album from "./components/Album"
import Header from "./components/Header"
import { albumReducer, initialState } from "./reducer/albumReducer"

function App() {
  const [state,dispatch] = useReducer(albumReducer,initialState)

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state.cart))
  },[state.cart])
  
 return (
 <>
      <Header
        cart = {state.cart}
        favoritos={state.fav}
        dispatch={dispatch}
        cartTotal={0}/>

      <main className='container-xl mt-5'>
        <h2 className='text-center'>Nustra coleccion</h2>
        <div className="row mt-5">

          {state.data.map((album)=>{
            return(
              <Album key={album.id} album={album} dispatch={dispatch}/>
            )
          })}

        </div>
      </main>

      <footer className='bg-dark mt-5 py-5'>
        <div className='container-xl'>
          <p className='text-white text-center fs-4 mt-4 m-md-0'>
            MUSIC - Todos los derechos reservados
          </p>
        </div>
      </footer>
 </> 
 )
}

export default App
