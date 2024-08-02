import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
 

  return (
      <div>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer itemId = {2}/>
      </div>
  )
}

export default App
