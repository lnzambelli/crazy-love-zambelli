import Button from '@mui/material/Button';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './ItemCount.css';

const ItemCount = ({cantidad, setCantidad, setShowButton}) => {

    const addCount = () => {
        setCantidad(cantidad+1)
    }

    const removeCount = () => {
        setCantidad(cantidad-1)
    }

    return(
        <Card sx={{ maxWidth: 300 }} className="contenedorContador">
            <CardContent>
                <Button variant="text" onClick={removeCount} disabled={cantidad<1}>-</Button>
                <Button variant="outlined">{cantidad}</Button>
                <Button variant="text" onClick={addCount} disabled={cantidad>=10}>+</Button> 
            </CardContent>
            <Button variant="contained"onClick={()=>setShowButton(true)}>Agregar al carrito</Button>
      </Card>
      
    )
}

export default ItemCount