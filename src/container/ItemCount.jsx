import { useState } from 'react';

function ItemCount({ inicial, stock, onAdd }) {
    const [count, setCount] = useState(inicial);
    //! const [fecha, setFecha] = useState(Date()); // Esto para darle una forma persistente

    const handleCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const subtractCount = () => {
        if (count > inicial) {
            setCount(count - 1);
        }
    };

    const agre = () => {
        return onAdd(count);
    };

    return (
        <div>
            <div className='contador'>
                <div className='contador-btn'>
                    <button onClick={subtractCount}>-</button>
                    <label>{count}</label>
                    <button onClick={handleCount}>+</button>
                    <button onClick={agre}>AGREGAR</button>
                </div>
            </div>
        </div>
    );
}
export default ItemCount;
