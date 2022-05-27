import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


const CartWidget = () => {
    return(
        <IconButton size="large" edge="start" >
                <ShoppingCartIcon className='cartButton'/>
        </IconButton>
    )
}

export default CartWidget