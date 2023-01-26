import './App.css';
import  NavBar from './components/NavBar/NavBar'
import  NavBarResp from './components/NavBarResp/NavBarResp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: '#f73378',
      },
      secondary: {
        main: '#af52bf',
      },
    },
  });

  return (
    <div className="App">
      <CartProvider>
        <ThemeProvider theme={outerTheme}>
          <BrowserRouter>
            <NavBarResp/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/productos' element={<Productos/>}></Route>
                <Route path='/productos/:category' element={<Productos/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
