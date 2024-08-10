import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'


function App() {

  
  return (
      <div>

        <CartProvider>
        <BrowserRouter>

           <NavBar/>

           <Routes>
            <Route path= "/" element={<ItemListContainer/>}/>
            <Route path= "/item/:id" element={<ItemDetailContainer/>}/>
            <Route path= "/productos" element={<ItemDetailContainer/>}/>
            <Route path= "/productos/:categoria" element={<ItemDetailContainer/>}/>
            <Route path= "/nosotros" element={<Nosotros/>}/>
            <Route path= "/contacto" element={<Contacto/>}/>
            <Route path= "/carrito" element={<Carrito/>}/>
           </Routes>


        </BrowserRouter>
        </CartProvider>
      </div>
  )
}

export default App
