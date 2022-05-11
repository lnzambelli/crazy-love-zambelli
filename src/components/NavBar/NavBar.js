import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Avatar from '@mui/material/Avatar';

const NavBar = () => {
    return(
        <AppBar position="static">
          <Toolbar className='navbar'>
              <h1>Crazy Love</h1>
              <BottomNavigation
                showLabels
                className='navegacion'
              >
                <BottomNavigationAction label="Productos" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Contacto" icon={<ContactsIcon />} />
                <BottomNavigationAction label="Carrito" icon={<ShoppingCartIcon />} />
              </BottomNavigation>
              <Avatar>LZ</Avatar>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar