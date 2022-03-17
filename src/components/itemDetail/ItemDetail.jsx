import ItemCount from '../../container/ItemCount'
import Greeting from "../../container/Greeting";
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({detail}) => {
  


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
                                          {`${detail.address}`}
                                       </p>
                                       <p>
                                            {`Precio: $ ${detail.price}
                                           `}
                                        </p>
                                        <p className='item-stock'>
                                            {`Stock: ${detail.Stock}`}
                                        </p>
                                       
                                {/* <div className="item-footer">
                                    <ItemCount className="item-btn"
                                    inicial= {1} stock={detail.Stock}/>
                       
                                </div> */}
                        
                            </div>
                    
                        </div>
            </div>       
      </div>
  )
}

export default ItemDetail
