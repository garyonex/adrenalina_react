import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemCount from "./ItemCount";


export default function ItemPromise (){
    const [muestra, setMuestra] = useState([])// el array basio es para iniciarlo
    const [loading, setLoading] = useState(true)//tiene que ser un dato boleano
    useEffect(() => {
        getFetch // llamada a la api
        .then((resp)=>{
            setMuestra(resp);
        })
        .catch((error=>
            console.log('Existe un error', error)
        ))
        .finally(()=>{
            setLoading(false);
        })
    }, [])

    console.log(muestra) 
    
    return (
        <div className="contenedor-card">

            { loading ? <h1>CARGANDO...</h1>
            :
            muestra.map((prod)=><div
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

            </div>)}
        </div>
    )
}

