import ItemCount from '../../container/ItemCount';
import Greeting from '../../container/Greeting';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ detail }) => {
    const [cambia, setCambia] = useState(false);
    const { agregarCart } = useCartContext();

    const onAdd = (cant) => {
        console.log(cant);
        setCambia(cant);
        agregarCart({ ...detail, cantidad: cant });
    };
    //! console.log(cartList); // esto muestra que es lo que se esta agregando
    return (
        <div>
            <Greeting saludo={'Detalle del producto'} />

            <div className='contenedor-item'>
                <div
                    key={detail.id}
                    // className="contenedor-card"
                >
                    <div className='item'></div>
                    <div className='item-body'>
                        <img
                            src={detail.foto}
                            alt={detail.name}
                            className='item-body-img'
                        />
                    </div>
                    <div className='item-header'>
                        <h3>
                            {`${detail.name} -\n 
                                            ${detail.condition}`}{' '}
                            <br />
                        </h3>
                        <p className='item-header-p'>{`${detail.description}`}</p>
                        <p>{`Zona: ${detail.address}`}</p>
                        <p>
                            {`Precio: $ ${detail.price}
                                           `}
                        </p>
                        <p className='item-stock'>{`Stock: ${detail.Stock}`}</p>

                        <div className='item-footer'>
                            {cambia ? (
                                <div className='btn-add'>
                                    <ItemCount
                                        inicial={1}
                                        stock={detail.Stock}
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
                                    stock={detail.Stock}
                                    onAdd={onAdd}
                                ></ItemCount>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
