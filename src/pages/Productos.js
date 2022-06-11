import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import listItems from "../utils/productsMock"
import { useParams } from 'react-router-dom'

//firestore
import {collection, getDocs} from 'firebase/firestore'
import db from '../utils/firebaseConfig'

const Productos = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect( () => {
    getProducts().then((prod)=>{  
        filterByCategory(prod)
    })
  }, [category])
  
  const getProducts = async () =>{
    const productSnapshot = await getDocs(collection(db,"products"));
    
    const productList = productSnapshot.docs.map((doc)=>{
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
} 

  const filterByCategory = (array) => {
    setProducts(array.filter( item=> item.category == category))       
  }

  return(
      <div className='general-container'>
          <ItemList title={'LISTADO DE PRODUCTOS'} items={products}/>
      </div>
  )
}

export default Productos