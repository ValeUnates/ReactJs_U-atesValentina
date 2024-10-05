import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='containerApp'>
      <NavBar/>
      <ItemListContainer saludo = {"¡Bienvenido a TechCase donde vas a encontrar los mejores accesorios para tu celu!"} />
    </div>
  )
}

export default App
