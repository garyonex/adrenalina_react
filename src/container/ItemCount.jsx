import { useState } from 'react';

function ItemCount ({inicial, stock}) {
  const [count , setCount] = useState(inicial)
  const [fecha, setFecha] = useState(Date()) // Esto para darle una forma persistente


  const handleCount = () =>{
    // contador += 1 => contador = contador + 1 ( es igual )
    // console.log(contado
    setCount(count + 1);
    setFecha(Date())
  }

  const subtractCount = () =>{
    setCount(count - 1)
    setFecha(Date())
  }
  // console.log(array);
  function onAdd() {
    return console.log(count);
  }
  return(
        <div >
          <div className="contador">
            <p> Botellas 🍾</p>
            {/* <h4>{inicial}</h4>
            <h4>Stock {stock}</h4> */}
            <div className="contador-btn">
              <button onClick={subtractCount}>👎</button>
              <label>{ count }</label>
              <button onClick = {handleCount}>👍</button>
              <button onClick={onAdd}>AGREGAR</button>
            </div>
          </div>
          <span>{fecha}</span>
        </div>
  ) 
}
export default ItemCount
