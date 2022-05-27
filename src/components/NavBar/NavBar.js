import './NavBar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <AppBar position="static">
        <Toolbar className='navbarContainer'>
            <div className='logo'>
                <a>CRAZY LOVE</a>
            </div>
            <ul className='navbar'>
                <li>
                    <Button disableRipple  variant='text' color='inherit'className='btnPage'>Productos</Button>
                </li>
                <li>
                    <Button disableRipple  variant='text' color='inherit'className='btnPage'>Mis Compras</Button>
                </li>
                <li>
                    <Button disableRipple  variant='text' color='inherit' className='btnPage'>Contacto</Button>
                </li>
            </ul>
            <CartWidget />
        </Toolbar>
    </AppBar>
  ) 
};
export default NavBar