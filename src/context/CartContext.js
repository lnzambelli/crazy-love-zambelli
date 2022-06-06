import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    return(
        <CartContext.Provider >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext