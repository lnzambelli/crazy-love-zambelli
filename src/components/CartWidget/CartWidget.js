import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return(
        <IconButton size="large" edge="start" color="inherit">
            <Badge color="error" variant="dot">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
}

export default CartWidget