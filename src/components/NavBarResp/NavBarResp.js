import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './NavBarResp.css';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} style={{marginBottom: '58px'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor: '#fff'}}>
        <Toolbar className='navbarContainer'>
            <div className='menuLogo'>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
            <Link to="/home" className='nombre'>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} className='titulo'>
              Crazy Love
            </Typography>
            </Link>
            </div>
            <CartWidget />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <Link to="/productos/saphirus"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <FilterVintageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Saphirus" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/milano"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <CleanHandsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Milano" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/decoracion"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <SelfImprovementIcon />
                    </ListItemIcon>
                    <ListItemText primary="Decoración" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/sagrada"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <LocalFireDepartmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sagrada Madre" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/iluminarte"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <OfflineBoltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Iluminarte" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/mates"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <LocalCafeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mates" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/remeras"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DryCleaningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Remeras" />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to="/productos/regalos"  className='linkNavbar'>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <CardGiftcardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Regalos" />
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
            <Link to="/home"  className='linkNavbar'> 
            <ListItem disablePadding> 
                <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            </Link>
            <a href="https://www.instagram.com/vircrazylove/"  className='linkNavbar' target={"_blank"}> 
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="Instagram" />
                </ListItemButton>
            </ListItem>
            </a>
            <a href=" https://wa.me/3492213095"  className='linkNavbar' target={"_blank"}> 
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <WhatsAppIcon />
                </ListItemIcon>
                <ListItemText primary="WhatsApp" />
                </ListItemButton>
            </ListItem>
            </a>
        </List>
      </Drawer>
    </Box>
  );
}