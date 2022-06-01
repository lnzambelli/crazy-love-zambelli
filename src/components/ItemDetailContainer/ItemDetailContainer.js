import React from 'react'
import { useEffect, useState} from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import listItems from './../../utils/productsMock'
import { useParams, useNavigate  } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    
    useEffect(() => {

        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            setProduct(productFilter)
        }
    }, [id])

    const productFilter = listItems.find( (product) => {
        return product.codArt == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer