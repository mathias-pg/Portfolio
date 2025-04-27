
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'

function App() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar/>
      <Home/>
      <About/>
      <Competences/>
      
    </div>
  )
}

export default App
