
import { Route, Routes } from 'react-router-dom';
import FormCreate from './components/FormCreate/FormCreate';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import  {useLocation} from 'react-router-dom'
import Profile from './views/Profile/Profile';
import { Carrito } from './components/Carrito/Carrito';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import FormEdit from './components/FormEdit/FormEdit'
import Success from './components/Success/Success';
import './App.css'


function App() {
  const {pathname} = useLocation()
  return (
    <div class='bg-black'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/Tienda" element={<Home/>}/>
        <Route path='/CrearProducto' element={<FormCreate/>}/>
        <Route path='/Perfil' element={<Profile/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
        <Route path='/Detalle/:id' element={<Detail/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Editar/:id' element={<FormEdit/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>
  )
}

export default App