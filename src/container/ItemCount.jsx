import { useState, useEffect } from 'react';
import Div from '../components/Div';


function ItemCount ({inicial, stock,agg}) {
  const [count , setCount] = useState(inicial)
  const [fecha, setFecha] = useState(Date()) // Esto para darle una forma persistente
  
      // const [bool , setBool] = useState(true)
      // useEffect(()=>{
      //   console.log('llamda api o tarea pesada 1 siempre');
      //     return ()=> {console.log('al desmontar');}// primero se generara esto, luego se genera el log
      // },)
      // useEffect(()=>{
      //   console.log('llamda api o tarea pesada 2 una sola vez');
      //   //LLAMADAS A LAS APIS, SERA UNA SOLA VEZ

      // },[])//esto genera un filtro 

      // useEffect(()=>{
      //   console.log('solo si cambio bool');

      // },[bool])//solo si cambia bool es que se ejecuta

  const handleCount = () =>{
    // contador += 1 => contador = contador + 1 ( es igual )
    // console.log(contado
    // setFecha(Date())
        if( count < stock){
          setCount(count + 1);
        }
    
  }

  const subtractCount = () =>{
    
        if( count > inicial){
          setCount(count - 1)
        }
 
  }
  // console.log(array);
 const onAgg =() =>{
    return console.log(count);
  }

  // console.log('item count 3');
  return(
        <div >
            {/* <Div /> */}
            <div className="contador">
              <div className="contador-btn">
                <button onClick={subtractCount}>🔻</button>
                <label>{ count }</label>
                <button onClick = {handleCount}>🔺</button>
                <button onClick={onAgg}>AGREGAR</button>
                
                {/* <button onClick={()=>setBool(!bool)}>Boleano</button> */}
              </div>
            </div>
            {/* <span>{fecha}</span> */}
        </div>
  ) 
}
export default ItemCount
