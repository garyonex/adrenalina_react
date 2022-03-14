import ItemCount from '../../container/ItemCount'
import Greeting from "../../container/Greeting";

const ItemDetail = ({producto}) => {
  

  return (
      <div>
         <Greeting saludo={'Soy itemDetail'} />

            <div className="contenedor-item">
                {producto.map((e,id)=>{
                    return(
                        <div
                        key={id}
                        // className="contenedor-card"
                        >
                            <div className="item">
                                </div>
                                <div className="item-body">
                                    <img src={e.thumbnail} alt="" className="item-body-img" />
                                </div>
                                    <div className="item-header">
                                        <p>
                                        {`${e.title} -\n 
                                        ${e.condition}`} <br />
                                       </p>
                                       <p>
                                        {`${e.address.state_name}`}
                                       </p>
                                       <p>
                                            {`Precio: $ ${e.price}
                                           `}
                                        </p>
                                        <p className='item-stock'>
                                            {`Stock: ${e.available_quantity}`}
                                        </p>
                                       
                                <div className="item-footer">
                                    <ItemCount className="item-btn"
                                    inicial= {1} stock={e.available_quantity}/>
                                </div>
                        
                            </div>
                    
                        </div>
                    )
                })}
            </div>       
      </div>
  )
}

export default ItemDetail
