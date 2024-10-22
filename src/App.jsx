import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='containerApp'>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element= {<ItemListContainer saludo = {"¡Bienvenido a TechCase donde vas a encontrar los mejores accesorios para tu celu!"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo = {"¡Bienvenido a TechCase donde vas a encontrar los mejores accesorios para tu celu!"}/>}/>
          <Route path='/descripcion/:idProduct' element= {<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
