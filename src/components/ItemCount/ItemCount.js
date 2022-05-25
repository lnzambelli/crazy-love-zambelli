import Button from '@mui/material/Button';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './ItemCount.css';
import MyAlert from '../MyAlert/MyAlert';

const ItemCount = () => {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(10)
    const [myMsj, setMyMsj] = useState('No se agregaron productos')

    const onAdd = () =>{
       setMyMsj(`Se agregaron ${count} productos `)
    }

    return(
        <Card sx={{ maxWidth: 275 }} className="contenedorContador">
            <CardContent>
                <Button variant="text" onClick={()=>setCount(count-1)} disabled={count<1}>-</Button>
                <Button variant="outlined">{count}</Button>
                <Button variant="text" onClick={()=>setCount(count+1)} disabled={count>=stock}>+</Button> 
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={onAdd}>Agregar al carrito</Button>
            </CardActions>
            <MyAlert text={myMsj} type="success" ></MyAlert>
      </Card>
      
    )
}

export default ItemCount