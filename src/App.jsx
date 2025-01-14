import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App() {

  return (
    <div className='containerApp'>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path='/' element= {<ItemListContainer saludo = {"¡Bienvenido a TechCase donde vas a encontrar los mejores accesorios para tu celu!"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo = {"¡Bienvenido a TechCase donde vas a encontrar los mejores accesorios para tu celu!"}/>}/>
          <Route path='/descripcion/:idProduct' element= {<ItemDetailContainer />} /> 
          <Route path="/cart" element={ <Cart/> } />
          <Route path= "/Checkout" element={<Checkout/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
