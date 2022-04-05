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
    // const  isInCart =(item)=>{
    //     return cartList.find(e => e.id === item.id) === undefined
    // }
    const vaciarCart =()=>{
        setCartList([])
    }
    const eliminar = (id) =>{
       return setCartList(cartList.filter((item)=>item.id !== id))
    }

    const totalItem =()=> {
        return cartList.reduce((acc, obj) => acc +- obj.cantidad, 0)
    }

  return (
    <CartContext.Provider value={{
        cartList,
        agregarCart,
        vaciarCart,
        enCart,
        eliminar,
        totalItem
        
    }}>
        {children}
    </CartContext.Provider>
  )
}
 