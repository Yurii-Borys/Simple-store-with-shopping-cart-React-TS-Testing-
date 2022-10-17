import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart"
import useLocalStorage from "../hooks/useLocaleStorage";

type ShopingCartContext = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    cartItems: CartItem[]
}

type CartItem = {
    id: number,
    quantity: number
}

const ShopingCartContext = createContext({} as ShopingCartContext)

export function useShoppingCart() {
    return useContext(ShopingCartContext)
}


export function ShopingCartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [isOpeningCart, setIsOpeningCart] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function openCart() {
        setIsOpeningCart(!isOpeningCart)
    }
    function closeCart() {
        setIsOpeningCart(!isOpeningCart)
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currtItems => {
            if (currtItems.find(item => item.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            } else {
                return currtItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currtItems => {
            if (currtItems.find(item => item.id === id)?.quantity === 1) {
                return currtItems.filter(item => item.id !== id)
            } else {
                return currtItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        }
        )
    }

    return (
        <ShopingCartContext.Provider value={{
            openCart,
            closeCart,
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems
        }}>
            {children}
            <ShoppingCart isOpeningCart={isOpeningCart} />
        </ShopingCartContext.Provider>
    )
}