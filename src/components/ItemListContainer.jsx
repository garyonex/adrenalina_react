import { useState } from 'react'

import Div from "./Div";

function ItemListContainer ({div}) {
  const [count , setCount] = useState(0)
  const [fecha, setFecha] = useState(Date()) // Esto para darle una forma persistente


  const handleCount = () =>{
    // contador += 1 => contador = contador + 1 ( es igual )
    // console.log(contado
    setCount(count + 1)
    setFecha(Date())
  }

  const subtractCount = () =>{
    setCount(count- 1)
    setFecha(Date())
  }
  // console.log(array);
  
  return(
        <div >
          
          <Div />
          <div className="contador">
            <h3>{fecha}</h3> <br />
            <div className="contador-btn">
              <button onClick={ subtractCount }>👎</button>
              <label>{ count }</label>
              <button onClick = { handleCount }>👍</button>
            </div>
          
          </div>
          
        </div>
  ) 
}
export default ItemListContainer

