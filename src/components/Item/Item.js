import React, { useContext } from 'react'
import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'

const Item = ({id,title,description, price, quantity, urlImg}) => {

    const {addProductToCart} = useContext(CartContext)

    const auxUrl = "./img-not-found.png";

    urlImg === '' ? urlImg=auxUrl : urlImg=urlImg 
  
  return (
    <Card sx={{maxWidth: 200, height: 360 }} className="cardItem">
        <Link to={`/producto/${id}`}  style={{ textDecoration: 'none'}}>
            <CardActionArea>
                <CardMedia component="img" height="" image={urlImg} alt={title} className="imgCardItem" onError={e=>{e.target.src=auxUrl}}/>
                <CardContent className='contentCardItem'>
                <h3 className='nombre'>
                    {title}
                </h3>
                <h6 className='detalle'>
                    {description} 
                </h6>
                </CardContent>
            </CardActionArea>
        </Link>
        <CardActions  className='actionCardItem'>
            <Button className='btnCart' onClick={()=>addProductToCart({id,title,description, price, quantity, urlImg})} endIcon={<AddShoppingCartIcon />}>$ {price}</Button>
        </CardActions>
    </Card>
  )
}

export default Item