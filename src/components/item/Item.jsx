import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../container/ItemCount';
import { useCartContext } from '../../context/CartContext';
import './item.css'

function Item({ prod }) {
    const [cambia, setCambia] = useState(false);
    const { agregarCart } = useCartContext();
    const onAdd = (cant) => {
        console.log(cant);
        setCambia(cant);
        agregarCart({ ...prod, cantidad: cant });
    };
    return (
        
            <div key={prod.id}className='contenedor-card'>
                <div className='card'>
                    <div  className='card-header'>
                        {`${prod.name}-${prod.categoria}`}
                    </div>
                    <div className='card-body'>
                        <img
                            src={prod.foto}
                            alt={prod.name}
                            className='card-body-img'
                        />
                    </div>
                    <div className='card-description'>
                        <p>
                            {`Precio: $ ${prod.price} \n 
                    Stock: ${prod.Stock}`}
                        </p>
                    </div>
                    <div className='card-footer'></div>
                    <Link to={`detalle/${prod.id}`}>
                        <div className='contador-btn'>
                            <button>Detalle Producto</button>
                        </div>
                    </Link>
                    {cambia ? (
                        <div className='btn-add'>
                            <ItemCount
                                inicial={1}
                                stock={prod.Stock}
                                onAdd={onAdd}
                            />
                            <Link to='/cart'>
                                <button className='btn-irAlCart'>
                                    {' '}
                                    Ir al Carrito
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <ItemCount
                            inicial={1}
                            stock={prod.Stock}
                            onAdd={onAdd}
                        />
                    )}
                </div>
            </div>
      
    );
}

export default Item;
