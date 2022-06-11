import React from 'react'
import { useEffect, useState} from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import listItems from './../../utils/productsMock'
import { useParams, useNavigate  } from "react-router-dom"

import {doc, getDoc, getFirestore} from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    
    useEffect(() => {
        getProduct().then((prod)=>{
            setProduct(prod)
        })
        
    }, [id])

    const getProduct = async () =>{
        const docRef = doc(db,"products", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id= docSnaptshop.id
        return product
    } 


    const productFilter = listItems.find( (product) => {
        return product.id == id
    })

    return(
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer