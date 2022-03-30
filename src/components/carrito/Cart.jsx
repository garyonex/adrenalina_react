import { Link } from "react-router-dom"
import ItemCount from "../../container/ItemCount"
import { useCartContext } from "../../context/CartContext"
import elimi from "../imagenes/1214428.png"

export default function Cart() {
  const { cartList, vaciarCart, eliminar} = useCartContext()
  console.log(cartList)
  const TotalPrice= cartList.reduce((acc, curr) => acc +(curr.price * curr.cantidad), 0)
  const imagen = {}
  
  return (
    <div>
      {cartList.length ? 
      <div className="carrito">
        <div className='carrito-titulo'>
          <h1>Cart</h1>
              <p> Productos en carrito : {cartList.length}</p>
            
              <p>Total precio : $ {TotalPrice}</p>
        </div>
            <div className="carrito-detalle">
              {cartList.map(item => 
              <div className="carrito-items">
                <div key={item.id}> <img src={item.foto} />
                    <div className="carrito-elimi">
                         <button onClick={()=>eliminar(item.id)}><img src={elimi} /></button>
                    </div>
                  <p>Nombre: {item.name}</p> 
                  <p>Precio por unidad:{item.price}</p>
                  <div className="contador-btn">
                    <button >-</button>
                      <label>{item.cantidad}</label>
                    <button >+</button>
                    <Link to="/">
                     <button>Seguir Comprando</button>
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
          <button onClick={vaciarCart}>Vaciar Carrito</button>
      </div>
        :
        <div className="carrito">
          <div className="carrito-titulo">
            <h1>Carrito de compra vacio</h1>
            <Link to="/">
              <button>Agregar Productos</button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
