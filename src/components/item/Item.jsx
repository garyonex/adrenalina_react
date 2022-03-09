import React from 'react'
import ItemCount from '../../container/ItemCount'

function Item({prod}) {
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
                <ItemCount className="card-btn"
                inicial= {1} stock={prod.Stock}/>
            </div>
    
        </div>

    </div>
)}
 

export default Item