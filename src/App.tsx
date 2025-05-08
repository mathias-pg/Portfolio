
import './App.css'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [navHeight, setNavHeight] = useState(0);
  
  useEffect(() => {
    const navbar = document.querySelector('div[class*="shadow-md fixed top-0"]');
    if (navbar) {
      setNavHeight((navbar as HTMLElement).offsetHeight);
    }
    
    const handleResize = () => {
      if (navbar) {
        setNavHeight((navbar as HTMLElement).offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-base-100 overflow-x-hidden">
      <Navbar/>
      <div style={{ paddingTop: `${navHeight}px` }}>
        <Home/>
        <About/>
        <Competences/>
        <Experiences/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
