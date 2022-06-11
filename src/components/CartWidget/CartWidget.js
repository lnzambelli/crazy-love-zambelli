import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from "react";
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';
import Badge from '@mui/material/Badge';

const CartWidget = () => {

    const { cardListItems, deleteProduct, clear, totalQuantity } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            {totalQuantity!=0 && 
            <IconButton size="large" edge="start" 
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >
                    <Badge badgeContent={totalQuantity} color="primary">
                        <ShoppingCartIcon className='cartButton'/>
                    </Badge>
            </IconButton>
            }
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p className='cartTitle'>Carrito de Compras</p>
                <Divider />
                    {cardListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Button className="cartBtnIrCompra"><Link  to="/productos/saphirus" >Ir a comprar!</Link></Button>
                        </>
                    )}
                    
                    {cardListItems.map( (cartProduct) => {
                        return(
                            <MenuItem className='cartContent' key={cartProduct.id}>
                                <div >
                                    <img className='cartImg' src={`${cartProduct.urlImg}`} /> 
                                </div>
                                <div className='cartInfo'>
                                    <p>{cartProduct.quantity} {cartProduct.title}</p>
                                    <span className='cartPrice'>$ {cartProduct.price}</span>
                                </div>
                                <div className='' onClick={()=>deleteProduct(cartProduct)}>
                                    <DeleteIcon  />
                                </div>
                            </MenuItem>
                        )
                    })}


                    {cardListItems.length !== 0 && (
                        <>
                        <Divider />
                        <div className='btnContainer'>
                            <Button className="cartBtnInit"><Link to="/cart" >Confirmar</Link></Button>
                        </div>
                        <Divider />
                        <div className='btnContainer' >
                            <Button className="cartBtnClear" onClick={()=>clear()}>Vaciar Carrito</Button>
                        </div>
                    </>
                     )}
            </Menu>
      </>
    )
}

export default CartWidget