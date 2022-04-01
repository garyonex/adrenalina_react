import React, { createContext, useContext, useState } from 'react'



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
    const eliminar = (id) =>{
       return setCartList(cartList.filter((item)=>item.id !== id))
    }

  return (
    <CartContext.Provider value={{
        cartList,
        agregarCart,
        vaciarCart,
        enCart,
        eliminar
        
    }}>
        {children}
    </CartContext.Provider>
  )
}
 