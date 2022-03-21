import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
   
    const [detail, setDetail] = useState({})
    const [cargando, setCargando] = useState(true)
    const{ detalleId} = useParams()
    //devulve solo en string PENDINETE
    console.log(detalleId)
     //Llamada a la api
    // const url = `https://api.mercadolibre.com/sites/MLA/search?q=cubosrubik&limit=6`
    
    useEffect(()=>{
            
        setTimeout(() => {
            
            getFetch
            .then(resu => setDetail(resu.find(prod => prod.id === detalleId)))
            
            //find paraque devuelva un solo producto
            
                // .then((resu)=> resu.json())
                // .then((resu)=> {
                //     setDetail(resu.results)
                //     console.log(resu.results);
                // })

            .catch((error => 
                console.log('Existe un error', error)
            ))
        
            .finally(()=>
            {setCargando(false)
            })
            
        }, 2000);
    },[])

    console.log(detail);
  return (
    <>
        
        
            <div className='contenedor-item'>
                {
                    cargando ? <h1>ESPERE POR FAVOR ...</h1>
                    :
                <ItemDetail detail ={detail} />
                }
            </div>
        
    </>
  )
}

export default ItemDetailContainer