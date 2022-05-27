import './App.css';
import  NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import MisCompras from './pages/MisCompras'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/contacto' element={<Contacto/>}></Route>
              <Route path='/productos' element={<Productos/>}></Route>
              <Route path='/miscompras' element={<MisCompras/>}></Route>
              <Route path='*' element={<Home/>}></Route>
          </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
