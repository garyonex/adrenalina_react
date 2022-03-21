import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../container/ItemCount'

const InputCount =() =>{
    return ( 
        <Link to="/cart"><button onClick={ ()=> console.log('otroboton')}>Cambia</button></Link>
    )
}

const ButtonCount =({handleInter}) =>{
    return(
            
            <button onClick={handleInter}> Agregar </button>
            
    ) 
    
}



export const Intercambiabilidad =() => {
    const [inputType, setInputType] = useState('button')
    const handleInter =()=>{
        setInputType('input')
    }
  return (
    <div>
        {
            inputType === 'button' ?
            <ButtonCount handleInter={handleInter} />
            :
            <InputCount />
        }
    </div>
  )
}
