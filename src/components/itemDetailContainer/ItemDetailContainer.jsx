import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import {getDoc, getFirestore, doc} from 'firebase/firestore'
const ItemDetailContainer = () => {
   
    const [detail, setDetail] = useState({})
    const [cargando, setCargando] = useState(true)
    const{ detalleId} = useParams()
    //devulve solo en string PENDINETE
    console.log(detalleId)

    useEffect(()=>{
            
        setTimeout(() => {
            const db= getFirestore()
            const queryDb = doc(db, 'productos', detalleId)
            getDoc(queryDb)
            .then(resp=>setDetail({id:resp.id, ...resp.data()}))
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
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