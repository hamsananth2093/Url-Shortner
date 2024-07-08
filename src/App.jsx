import './App.css'
import { Boost } from './components/Boost'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Stats } from './components/Stats'
function App() {

  return (
    <div className="min-w-full max-w-full ">
       <Navbar/>
      <Hero></Hero>
      <Stats/>
      <Boost/>
      <Footer/>
      </div>
  )
}

export default App
