import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    //Llamada a la api
    const [detail, setDetail] = useState([])
    const [cargando, setCargando] = useState(true)
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=cubosrubik&limit=1`
    
    useEffect(()=>{
            
        setTimeout(() => {
            
            fetch(url)
            .then((resu)=> resu.json())
            .then((resu)=> {
                setDetail(resu.results)
                console.log(resu.results);
            })

            .catch((error => 
                console.log('Existe un error', error)
            ))
        
            .finally(()=>
            {setCargando(false)
            })

        }, 5000);
    },[])
    console.log(detail);
  return (
    <>
        <ItemDetail producto ={detail}/>
    </>
  )
}

export default ItemDetailContainer