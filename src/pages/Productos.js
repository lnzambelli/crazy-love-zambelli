import { useEffect, useState } from "react"
import ItemList from "../components/ItemList/ItemList"
import { useParams } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

//datos internos 
import listItems from '../utils/productsMock'

import saphirus from './../imagenes/assets/PORTADAS/saphirus.jpg'
import milano from './../imagenes/assets/PORTADAS/milano.jpg'
import mates from './../imagenes/assets/PORTADAS/mates.jpg'
import regalos from './../imagenes/assets/PORTADAS/regalos.jpg'
import sagrada from './../imagenes/assets/PORTADAS/sagrada.jpg'
import decoracion from './../imagenes/assets/PORTADAS/decoracion.jpg'
import iluminarte from './../imagenes/assets/PORTADAS/iluminarte.jpg'
import remeras from './../imagenes/assets/PORTADAS/remeras.jpg'
import sinproducto from './../imagenes/assets/sinproducto.png'

const Productos = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  const [cargando, setCargando] = useState(false)
  const [urlCategory, setUrlCategory] = useState('')

  useEffect( () => {
    obtenerLista()
  }, [category])
  

  const obtenerLista = async () => {
    const productList = listItems.filter(doc => doc.category === category)
    const arrPortadas = [saphirus, milano, mates, regalos, sagrada, decoracion, iluminarte, remeras];
    setUrlCategory(arrPortadas.find(cat => cat.includes(category)))
    return setProducts(productList)
  }

  

  return(
      <div className='general-container'>
          <Card width="100%">
            <CardMedia
              component="img"
              height="250"
              image={urlCategory}
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
            products.length === 0 && <img src={sinproducto} alt="no hay productos"></img>
          }
      </div>
  )
}

export default Productos