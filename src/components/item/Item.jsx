import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../container/ItemCount'
import { useCartContext } from '../../context/CartContext'

function Item({prod}) {
    const [cambia, setCambia] = useState(false)
    const {agregarCart, cartList, enCart} = useCartContext()
    const onAdd = cant => {
        console.log(cant);
        setCambia(cant)
        agregarCart({ ...prod, cantidad: cant})
    
    }
  return (
    <div
    key={prod.id}
    className="contenedor-card"
    >
        <div className="card">
            <div className="card-header">
                {`${prod.name}-${prod.categoria}`}
            </div>
            <div className="card-body">
                <img src={prod.foto} alt="" className="card-body-img" />
            </div>
            <div className="card-description">
                <p>
                    {`Precio: $ ${prod.price} \n 
                    Stock: ${prod.Stock}`}
                </p>
            </div>
            <div className="card-footer">
             
            </div>
            <Link to={`detalle/${prod.id}`}>
              
              <div className='contador-btn'>
                    <button>Detalle Producto</button>
              </div>
            </Link>
            { enCart(prod.id) ?
            <Link to="/cart">
                <div className='contador-btn'>
                    <button> Ir al Carrito</button>
                </div>
            </Link>
            :
            <ItemCount inicial={1} stock={prod.Stock} onAdd={onAdd} />
            }
            
        </div>

    </div>
)}
 

export default Item