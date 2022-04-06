import ItemCount from '../../container/ItemCount'
import Greeting from "../../container/Greeting";
import { Intercambiabilidad } from '../intercambio/Intercambiabilidad';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';



const ItemDetail = ({detail}) => {
   const [cambia, setCambia] = useState(false)
   const {agregarCart, cartList, enCart} = useCartContext()
   
    const onAdd = cant => {
        console.log(cant);
        setCambia(cant)
        agregarCart({ ...detail, cantidad: cant})
        
        
    }
    console.log(cartList);// esto muestra que es lo que se esta agregando
  return (

      <div>
     
         <Greeting saludo={'Soy itemDetail'} />

            <div className="contenedor-item">
                        <div
                        key={detail.id}
                        // className="contenedor-card"
                        >
                            <div className="item">
                                </div>
                                <div className="item-body">
                                    <img src={detail.foto} alt={detail.name} className="item-body-img" />
                                </div>
                                    <div className="item-header">
                                        <p>
                                            {`${detail.name} -\n 
                                            ${detail.condition}`} <br />
                                       </p>
                                       <p>
                                           {`${detail.description}`}
                                       </p>
                                       <p>
                                          {`Zona: ${detail.address}`}
                                       </p>
                                       <p>
                                            {`Precio: $ ${detail.price}
                                           `}
                                        </p>
                                        <p className='item-stock'>
                                            {`Stock: ${detail.Stock}`}
                                        </p>
                                       
                                <div className="item-footer">
                                    { cartList?
                                      <ItemCount
                                      inicial= {1} stock={detail.Stock} onAdd={onAdd}>
                                      </ItemCount>
                                      
                                    :
                                    <ItemCount
                                    inicial= {1} stock={detail.Stock} onAdd={onAdd}>
                                    </ItemCount>
                                    }
                                  
                                </div>
                        
                            </div>
                    
                        </div>
            </div>       
      </div>
  )
}

export default ItemDetail
