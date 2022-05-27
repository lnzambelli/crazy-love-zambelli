import React from 'react'
import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Item = ({codArt,title,description, price, urlImg}) => {

    const auxUrl = "./img-not-found.png";

    urlImg=='' ? urlImg=auxUrl : urlImg=urlImg 
  
  return (
    <Card sx={{maxWidth: 250 }} className="cardItem">
        <CardActionArea>
            
            <CardMedia component="img" height="" image={urlImg} alt={title} className="imgCardItem" onError={e=>{e.target.src=auxUrl}}/>
            <CardContent className='contentCardItem'>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description} 
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions  className='actionCardItem'>
            <Button  className='btnCart' variant="contained" endIcon={<AddShoppingCartIcon />}>$ {price}</Button>
        </CardActions>
    </Card>
  )
}

export default Item