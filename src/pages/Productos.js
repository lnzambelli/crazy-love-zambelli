import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import listItems from "../utils/productsMock"
import { useParams } from 'react-router-dom'

const Productos = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect( () => {
      setProducts([])
      getProducts()
      .then( (response) => {
          //setProducts(response)
          filterByCategory(response)
      })
  }, [category])
  
  const getProducts = () => {
      return new Promise( (resolve, reject) => {
          // setTimeout(() => {
              resolve(listItems)
          // }, 4000)
      })
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