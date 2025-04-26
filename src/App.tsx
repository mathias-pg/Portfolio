
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'

function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <Competences/>
    </div>
  )
}

export default App
