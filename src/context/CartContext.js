import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cardListItems, setCardListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
   

    const addProductToCart = (product) => {
        let isInCart = cardListItems.find(cartProduct => cartProduct.title+cartProduct.opcion === product.title+product.opcion)
        if(!isInCart) { 
            setCardListItems(cardListItems => [...cardListItems, product])
            setTotalPrice(totalPrice+(product.price*Number(product.quantity) ))
            setTotalQuantity(totalQuantity + Number(product.quantity))
        }else{
            cardListItems.map(prod => {
                if (product.id === prod.id){
                    prod.quantity = Number(prod.quantity)+ Number(product.quantity)
                }
            })
            setTotalPrice(totalPrice+(product.price*Number(product.quantity) ))
            setTotalQuantity(totalQuantity + Number(product.quantity))
        }
        
    }

    const deleteProduct = (product) => {
        setCardListItems(cardListItems.filter( cartProduct => cartProduct.title+cartProduct.opcion !== product.title+product.opcion))
        setTotalPrice(totalPrice - (Number(product.quantity)*product.price))
        setTotalQuantity(totalQuantity - product.quantity)
       
    }
    
    const clear = () =>{
        setCardListItems([])
        setTotalPrice(0)
        setTotalQuantity(0)
    }


    const data = {
        cardListItems,
        addProductToCart,
        deleteProduct,
        totalPrice,
        totalQuantity,
        setTotalQuantity,
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