
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar/>
      <Home/>
      <About/>
      <Competences/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
