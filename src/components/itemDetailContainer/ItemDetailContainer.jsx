import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    //Llamada a la api
    const [poke, setPoke] = useState([])
    const [cargando, setCargando] = useState(true)
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=nike&limit=3`
    
    useEffect(()=>{
            
        setTimeout(() => {
            
            fetch(url)
            .then((resu)=> resu.json())
            .then((resu)=> {
                setPoke(resu.results)
                console.log(resu.results);
            })

            .catch((error => 
                console.log('Exixte un error', error)
            ))
        
            .finally(()=>
            {setCargando(false)
            })

        }, 5000);
    },[])
    console.log(poke);
  return (
    <>
        <ItemDetail producto ={poke}/>
    </>
  )
}

export default ItemDetailContainer