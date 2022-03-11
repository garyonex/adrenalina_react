import { useEffect, useState } from "react";
import Item from "../components/item/Item";
import ItemDetail from "../components/itemDetail/ItemDetail";
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
        
    // useEffect(() => {
    //     let url = './assets/DATA.json' 
    //     fetch(url)
    //     .then((resp) => resp.JSON())
    //     .then((resp) => console.log(resp))
    // }, [])
   
    // useEffect(() => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/?limit=20`
    //     fetch(url)
    //     .then((resp) =>{return resp.json()})
    //     .then((resp) => {
    //         console.log (resp.results)
    //         resp.results.forEach(e=>{
    //             console.log(e.name)
    //         })
    //     })
    // }, [])

    
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

