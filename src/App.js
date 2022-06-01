import './App.css';
import  NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import Detalle from './pages/Detalle'
import MisCompras from './pages/MisCompras'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/contacto' element={<Contacto/>}></Route>
              <Route path='/productos' element={<Productos/>}></Route>
              <Route path='/productos/:category' element={<Productos/>}></Route>
              <Route path='/producto/:id' element={<Detalle/>}></Route>
              <Route path='/miscompras' element={<MisCompras/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
