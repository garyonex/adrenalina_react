import { useState } from 'React'


export default function itemlistContainer() {
    const[ count, setCount]= useState(0);
    const handleCount = ()=> {
      setCount(count +1)
    };
    let day = Date()
    
    return(
      <div>
        <label>{count}</label>
        <br />
        <button onClick={handleCount}> Click</button>
      
        <p>{day}</p>
      </div>
    
    );
  }