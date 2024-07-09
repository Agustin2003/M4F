"use client";

import { fetchProductById } from "@/lib/fetchProduct";
import { IProduct, ICartContextType } from "@/types";
import { createContext, useEffect, useState } from "react";



const addItem =async (cartItem: IProduct[], product: number):Promise<IProduct[]> => {
    const existingProduct = cartItem.find((item) => item.id === product);

    if (existingProduct) {
        alert("El producto ya está en el carrito.");
        return ; 
      }
    
    const data = await fetchProductById(product.toString());

    return [...cartItem, data];
};

const removeItem = (cartItems: IProduct[], product: number) => {
    return cartItems.filter((item) => item.id !== product)
}

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedtoCheckout:() => {}
});

const checkout = async (cartItems: IProduct[]) => {
    try {
        const products = cartItems.map((item) => item.id);
        const token = typeof window !== "undefined" && localStorage.getItem("token");
        const response = await fetch("https://m4f.onrender.com/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ products }),
        });

        if (response.ok) {
            console.log("success");
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log(error);
    }
};


export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);

    const addToCart = async (product: number) => {
        const updatedCart = await addItem(cartItems, product);
        setCartItems(updatedCart)
    };

    const removeFromCart = (product: number) => {
        setCartItems(removeItem(cartItems, product))
    }

    const proceedtoCheckout = () => {
        checkout(cartItems);
        setCartItems([])
    }

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0)
        setTotal(total)
    }, [cartItems])

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, total, proceedtoCheckout}}>
            {children}
        </CartContext.Provider>
    )
}
