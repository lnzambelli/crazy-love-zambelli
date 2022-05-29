import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react';
import listItems  from '../../utils/productsMock'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

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
        getItems()
        .then( response => setItems(response))
        .catch( err => console.log(err))
        .finally( () => {})
    }, [])

    return(
        <>
            <ItemList title={'Mis Productos'} items={items} ></ItemList>
            <ItemDetailContainer></ItemDetailContainer>
        </>
    )
}

export default ItemListContainer