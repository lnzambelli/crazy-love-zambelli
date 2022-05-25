import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from 'react';

const ItemListContainer = () => {

    const listItems = [
        {
            codArt: 1,
            title : 'Textil',
            description : "descripcion del producto",
            price : 290,
            urlImg: 'https://saphirus.com.ar/wp-content/uploads/2022/04/textil_naranjapimienta-800x800.jpg',
        },
        {
            codArt: 2,
            title : 'Difusor',
            description : "descripcion del producto",
            price : 850,
            urlImg: 'https://saphirus.com.ar/wp-content/uploads/2022/04/difusor-premium-lavanda-y-romero-01-016-800x800.jpg',
        },
        {
            codArt: 3,
            title : 'Air Cool',
            description : "descripcion del producto",
            price : 360,
            urlImg: 'https://saphirus.com.ar/wp-content/uploads/2022/04/1ovA3O26hl4h9iFMgkZjhLNa5S9eYMqLJccmzS4U-1-800x800.jpeg',
        },
        {
            codArt: 4,
            title : 'Equipo',
            description : "descripcion del producto",
            price : 1300,
            urlImg: 'https://saphirus.com.ar/wp-content/uploads/2022/04/Red-Blood-430x430.png',
        },
        {
            codArt: 5,
            title : 'Titulo',
            description : "Prueba de img con error",
            price : 500,
            urlImg: '',
        },
        
    ]
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
        </>
    )
}

export default ItemListContainer