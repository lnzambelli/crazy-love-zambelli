import './NavBar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwitchTheme from '../SwitchTheme/SwitchTheme'

import { useContext } from "react";
import ThemeContext from '../../context/ThemeContext';

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar position="static" >
        <Toolbar className= {`navbarContainer ${darkTheme && 'dark-mode'}`}>
            <div className='logo'>
                <Link to="/home">
                    <a>CRAZY LOVE</a>
                </Link>
            </div>
            <ul className='navbar'>
                <li>
                    <Button disableRipple  variant='text' color='inherit'className='btnPage' id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                                Productos
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        
                        <MenuItem onClick={handleClose}><Link to="/productos/saphirus"  className='linkNavbar'>Saphirus  </Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/productos/tulia"  className='linkNavbar'>Tulia  </Link></MenuItem>
                    </Menu>
                </li>
                <li>
                    <Link to="/miscompras" className='linkNavbar'>
                        <Button disableRipple  variant='text' color='inherit'className='btnPage'>Mis Compras</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className='linkNavbar'>
                        <Button disableRipple  variant='text' color='inherit' className='btnPage'>Contacto</Button>
                    </Link>
                </li>
            </ul>
            <SwitchTheme/>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </Toolbar>
    </AppBar>
  ) 
};
export default NavBar