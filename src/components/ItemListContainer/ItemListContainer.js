import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react';
import listItems  from '../../utils/productsMock'

//firestore
import {collection, getDocs} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const getItems = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(listItems)
            }, 2000)
        })
    } 

    
    useEffect( () => {
        getProducts().then((prod)=>{  
            setItems(prod)
        })
       
    }, [])

    const getProducts = async () =>{
        const productSnapshot = await getDocs(collection(db,"products"));
        
        const productList = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    } 
    
  

    return(
        <>
            <ItemList title={'Mis Productos'} items={items} ></ItemList>
        </>
    )
}

export default ItemListContainer