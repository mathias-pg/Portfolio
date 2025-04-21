
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <div>
      <div className="p-5 md:px-[0%]">
        <Navbar/>
        <Home/>
      </div>
    </div>
  )
}

export default App
