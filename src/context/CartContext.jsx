import React, { createContext, useContext, useState } from 'react';

export const useCartContext = () => useContext(CartContext); //! para exportar mas facilen una sola linea y arrojar solo lo que quiero

export const CartContext = createContext([]);

export function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const agregarCart = (prod) => {
        const existeEnCart = cartList.find(
            (itemEnCart) => itemEnCart.id === prod.id
        );
        if (existeEnCart) {
            setCartList(
                cartList.map((itemEnCart) => {
                    if (itemEnCart.id === prod.id) {
                        return {
                            ...existeEnCart,
                            cantidad: existeEnCart.cantidad + prod.cantidad,
                        };
                    } else return itemEnCart;
                })
            );
        } else setCartList([...cartList, { ...prod, cantidad: 1 }]);
    };
    const enCart = (id) => {
        return cartList.some((prod) => prod.id === id);
    };
    const isInCart = (item) => {
        return cartList.find((e) => e.id === item.id) === undefined;
    };
    const vaciarCart = () => {
        setCartList([]);
    };
    const eliminar = (id) => {
        return setCartList(cartList.filter((item) => item.id !== id));
    };

    const totalItem = () => {
        return cartList.reduce((acc, obj) => acc + -obj.cantidad, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartList,
                agregarCart,
                vaciarCart,
                enCart,
                eliminar,
                totalItem,
                isInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
