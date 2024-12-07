import { Dispatch } from "react"
import { Albumm } from "../types"
import { CartActions } from "../reducer/albumReducer"

type AlbumProps= {
    album:Albumm,
    dispatch:Dispatch<CartActions>
}

export default function Album({album,dispatch}:AlbumProps) {
  return (
    <>
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/src/img/${album.image}.jpg`} alt="imagen album" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold- text-uppercase">{album.name}</h3>
                <p>{album.description}</p>
                <p className="fw-black text-primary fs-3">{album.price}</p>
                <button type="button"
                        className="btn btn-dark w-100"
                        onClick={()=> dispatch({type:"add-to-cart",payload:{item:album}})}
                        >
                    Agregar al carrito
                </button>
                {/* <button type="button"
                        className="btn btn-dark w-100"
                        onClick={()=> dispatch({type:"add-to-fav",payload:{item:album}})}
                        >
                    Agregar a favoritos
                </button> */}

            </div>

        </div>
    
    </>
  )
}
