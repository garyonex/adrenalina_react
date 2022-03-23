import { useCartContext } from "../../context/CartContext"



export default function Cart() {
  const { cartList, vaciarCart} = useCartContext()
  console.log(cartList)
  const TotalPrice= cartList.reduce((acc, curr) => acc +(curr.price * curr.cantidad), 0)
  return (
    <div className="carrito">
      <div  className='carrito-titulo'>
        <h1>Cart</h1>
            <p> Productos en carrito : {cartList.length}</p>
          
            <p>Total precio : {TotalPrice}</p>
      </div>
          <div className="carrito-detalle">
            {cartList.map(item => 
            <div className="carrito-items">
              <div key={item.id}> <img src={item.foto} />
                <p>Nombre: {item.name}</p> 
                <p>Precio por unidad:{item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
            </div>)}
        </div>
        {/* mapeamos el cart, y mostramos cada producto en una lista */}
        <button onClick={vaciarCart}>Vaciar Carrito</button>
        

    </div>
  )
}
