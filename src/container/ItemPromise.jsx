import { useEffect, useState } from "react";
import Item from "../components/item/Item";
import ItemList from "../components/itemList/ItemList";
import { getFetch } from "../helpers/getFetch";
import Greeting from "./Greeting";
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
       <div>
           <Greeting saludo={'Soy ItemPromise'}/>
            <div className="contenedor-card">
                
                { loading ? <h1>CARGANDO...</h1>
                :   
                <ItemList muestra={muestra} />
                }
            </div>
       </div>
    )
}

