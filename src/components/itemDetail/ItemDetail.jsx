import ItemCount from '../../container/ItemCount'
import Greeting from "../../container/Greeting";

const ItemDetail = ({producto}) => {
  

  return (
      <div>
         <Greeting saludo={'Soy itemDetail'} />

            <div className="contenedor-card">
                {producto.map((e,id)=>{
                    return(
                        <div
                        key={id}
                        // className="contenedor-card"
                        >
                            <div className="card">
                                <div className="card-header">
                                    {`${e.title}-${e.condition}`}
                                </div>
                                <div className="card-body">
                                    <img src={e.thumbnail} alt="" className="card-body-img" />
                                </div>
                                <div className="card-description">
                                    <p>
                                        {`Precio: $ ${e.price} \n 
                                        Stock: ${e.available_quantity}`}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <ItemCount className="card-btn"
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
