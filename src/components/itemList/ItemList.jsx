import { memo } from 'react';
import Item from '../item/Item';

const ItemList = memo(({ muestra }) => {
   
    return (
        <div className='container-itemList'>
            {muestra.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    );
});

export default ItemList;
