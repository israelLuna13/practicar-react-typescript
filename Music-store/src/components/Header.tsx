import React, { Dispatch, useMemo } from "react";
import { CartActions } from "../reducer/albumReducer";
import { Albumm, CartItem } from "../types";
type HeaderProps = {
  cart: CartItem[];
  favoritos: Albumm[];
  dispatch: Dispatch<CartActions>;
  cartTotal: number;
};
export default function Header({
  cart,
  favoritos,
  dispatch
}: HeaderProps) {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  //const isEmptyFav = useMemo(() => favoritos.length === 0, [favoritos]);
  const cartTotal  = useMemo(
        () => 
            cart.reduce((total,item) => (total += item.quantity * item.price),0),[cart]
    )
  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img className="img-fluid" src="" alt="imagen logo" />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img className="img-fluid" src="" alt="imagen carrito" />

                <div id="carrito" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">Carrito vacio</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((album) => (
                            <tr key={album.id}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`/src/img/${album.image}.jpg`}
                                  alt="imagen album"
                                />
                              </td>
                              <td>{album.name}</td>
                              <td className="fw-bold">{album.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button 
                                     type="button" 
                                     className="btn btn-dark" 
                                     onClick={() => dispatch({type:"decrease-quantity", payload:{id:album.id}})}>
                                  -
                                </button>
                                {album.quantity}

                                <button type="button" 
                                        className="btn btn-dark"
                                        onClick={() => dispatch({type:"increase-quantity", payload:{id:album.id}})}
                                        >
                                  +
                                </button>
                              </td>

                              <td className="flex align-items-start gap-4">
                                <button type="button" className="btn btn-dark"  onClick={() => dispatch({type:"remove-from-cart", payload:{id:album.id}})} >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p>
                        Total a pagar:{" "}
                        <span className="fw-bold">${cartTotal}</span>
                      </p>
                    </>
                  )}

                  <button 
                        className="btn btn-dark w-100 mt-3 p-2"
                        onClick={() => dispatch({type:"clear"})}>
                    Vaciar Carrito
                  </button>
              </div>
            </div>

              {/* favoritos */}
              {/* <div id="carrito" className="bg-white p-3">
                {isEmptyFav ? (
                  <p className="text-center">No hay favoritos</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead></thead>
                      <tbody>
                        {favoritos.map((album) => (
                          <tr key={album.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/src/img/${album.image}.jpg`}
                                alt="imagen album"
                              />
                            </td>
                            <td>{album.name}</td>
                            <td className="fw-bold">{album.price}</td>

                            <td className="flex align-items-start gap-4">
                              <button type="button" className="btn btn-dark">
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}

                <button className="btn btn-dark w-100 mt-3 p-2">
                  Vaciar Favoritos
                </button>

               </div> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
