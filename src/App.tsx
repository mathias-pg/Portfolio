
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'
import Experiences from './components/Experiences'

function App() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar/>
      <Home/>
      <About/>
      <Competences/>
      <Experiences/>
      
    </div>
  )
}

export default App
