import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

//firestore
import {collection, getDocs} from 'firebase/firestore'
import db from '../utils/firebaseConfig'

const Productos = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    getProducts().then((prod)=>{  
        filterByCategory(prod)
    })
  }, [category])
  
  const getProducts = async () =>{
    setCargando(true)
    const productSnapshot = await getDocs(collection(db,"products"));
    
    const productList = productSnapshot.docs.map((doc)=>{
        let product = doc.data()
        product.id = doc.id
        return product
    })
    setCargando(false)
    return productList
} 

  const filterByCategory = (array) => {
    setProducts(array.filter( item=> item.category == category))       
  }

  return(
      <div className='general-container'>
          <h1 className="nombreCategoria">{category}</h1>
          {!cargando ?
              <ItemList title={`LISTADO DE PRODUCTOS`} items={products}/>
           :  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
              </Stack>
          }
      </div>
  )
}

export default Productos