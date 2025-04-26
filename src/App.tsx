
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
    <div>
      <div>
        <Navbar/>
        <Home/>
      </div>
      <About/>
    </div>
  )
}

export default App
