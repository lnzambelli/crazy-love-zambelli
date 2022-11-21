import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

//datos internos 
import listItems from '../utils/productsMock'

const Productos = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    obtenerLista()
  }, [category])
  

  const obtenerLista = async () => {
    const productList = listItems.filter(doc => doc.category === category)
    return setProducts(productList)
}

  return(
      <div className='general-container'>
          <Card width="100%">
            <CardMedia
              component="img"
              height="250"
              image={`/assets/portadas/${category}.jpg`}
              alt="productos"
            />
            </Card>
          {!cargando ?
              <ItemList title={`LISTADO DE PRODUCTOS`} items={products}/>
           :  <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
              </Stack>
          }

          {
            products.length === 0 && <img src='../assets/sinproducto.png' alt="no hay productos"></img>
          }
      </div>
  )
}

export default Productos