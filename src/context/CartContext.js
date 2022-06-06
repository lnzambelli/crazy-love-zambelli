import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cardListItems, setCardListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cardListItems.find(cartProduct => cartProduct.codArt === product.codArt)
        if(!isInCart) { 
            setCardListItems(cardListItems => [...cardListItems, product])
        }
    }

    const deleteProduct = (product) => {
        setCardListItems(cardListItems.filter( cartProduct => cartProduct.codArt !== product.codArt))
    }
    
    const clear = () =>{
        setCardListItems([])
    }


    const data = {
        cardListItems,
        addProductToCart,
        deleteProduct,
        clear
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext