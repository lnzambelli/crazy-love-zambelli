import React from 'react'
import Card from '@mui/material/Card';
import './ItemDetail.css'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ItemCount from './../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';
import { useContext, useState } from "react";
import Chip from '@mui/material/Chip';

const ItemDetail = ({data}) => {

    const fragrance = ['Vainilla', 'Citrus',"Bebe"];
    const [value, setValue] = useState(2);
    
    const [showButton, setShowButton] = useState(false);
    const [cantidad, setCantidad] = useState(1);
    const { addProductToCart } = useContext(CartContext)

    const agregar = () => {
        data.quantity=cantidad
        addProductToCart(data)
    };

    return (
            <Card  className="containerDetail" >
                <img src={data.urlImg} className="imgDetail"></img>
                <Card className='infoDetail'>
                    <h1>{data.title}</h1>
                    <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    <h2>${data.price}</h2>
                    <Chip label="solo por hoy" color="primary" className='chip' />
                    <Autocomplete disablePortal  options={fragrance}sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Fragancia" />}/>
                    <p>{data.description}</p>
                    {!showButton ? 
                    <ItemCount cantidad={cantidad} setCantidad={setCantidad} setShowButton={setShowButton} />
                    :
                    <Button disableRipple  variant='text' color='inherit'className='btnPage' onClick={()=>agregar()}
                    ><Link to="/cart">Finalizar Compra</Link></Button>
                    }
                </Card>
        </Card>  
    )
}

export default ItemDetail