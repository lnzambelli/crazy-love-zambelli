import Button from '@mui/material/Button';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './ItemCount.css';

const ItemCount = () => {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(10)

    return(
        <Card sx={{ maxWidth: 300 }} className="contenedorContador">
            <CardContent>
                <Button variant="text" onClick={()=>setCount(count-1)} disabled={count<1}>-</Button>
                <Button variant="outlined">{count}</Button>
                <Button variant="text" onClick={()=>setCount(count+1)} disabled={count>=stock}>+</Button> 
            </CardContent>
            <Button variant="contained">Agregar al carrito</Button>
      </Card>
      
    )
}

export default ItemCount