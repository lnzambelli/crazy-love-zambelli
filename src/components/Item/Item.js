import React, { useContext, useState } from 'react'
import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../context/CartContext';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Item = ({id,title,description, options,price, quantity, urlImg, urlImgFrag}) => {
    
    const {addProductToCart} = useContext(CartContext)
    const auxUrl = "./img-not-found.png";

    urlImg === '' ? urlImg=auxUrl : urlImg=urlImg

    const [opcion, setOpcion] = useState('')

    const handleChange = (event) => {
        setOpcion(event.target.value);
        console.log(event.target.value)
    };
    
  return (
    <Card sx={{maxWidth: 250, height: 365 }} className="cardItem">
            
            <CardMedia component="img" max-height="200"  image={urlImg} alt={title} className="imgCardItem" onError={e=>{e.target.src=auxUrl}}/>
            <CardContent className='contentCardItem'>
                    {
                        options.length > 0 ? (
                        <FormControl fullWidth >
                            <NativeSelect
                                onChange={handleChange}
                                defaultValue={''}
                                inputProps={{
                                name: 'opcion',
                                id: 'uncontrolled-native',
                                }}
                            >
                                <option value={''}>Elegir opción</option>
                            {
                                
                                options.sort().map(opcion => <option key={opcion.value} value={opcion.value}>{opcion}</option>)
                            }     
                            
                            </NativeSelect>
                         
                        </FormControl>
                        ):(
                            <span>{title}</span>
                        )
                    }
        </CardContent>
        <CardActions  className='actionCardItem'>
            <Button variant="outlined" style={{ cursor: 'none' }}>${price}</Button>
            <Button variant="contained" disabled={options.length > 0 && opcion === ''}  className='btnCart' onClick={()=>addProductToCart({id,title,opcion, price, quantity, urlImg, opcion})} endIcon={<AddShoppingCartIcon />}>
                Agregar
            </Button>
        </CardActions>
    </Card>
  )
}

export default Item