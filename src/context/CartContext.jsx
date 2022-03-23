import React, { createContext, useContext, useState } from 'react'
import { getFetch } from '../helpers/getFetch'


export const useCartContext = ()=> useContext(CartContext) // para exportar mas facilen una sola linea y arrojar solo lo que quiero

export const CartContext = createContext([])

export function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item)=>{
        
            setCartList([ ...cartList, item ])
    }
    const enCart =(id) =>{
        return cartList.some((prod)=>prod.id === id)
    }
    const vaciarCart =()=>{
        setCartList([])
    }
   
  
  return (
    <CartContext.Provider value={{
        cartList,
        agregarCart,
        vaciarCart,
        enCart,
      
        
        
    }}>
        {children}
    </CartContext.Provider>
  )
}
 