import './App.css'
import { Boost } from './components/Boost'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Stats } from './components/Stats'
import { UrlInp } from './components/UrlInp'
function App() {

  return (
    <>
      <Navbar/>
      <Hero></Hero>
      <Stats/>
      <Boost/>
      <Footer/>
    </>
  )
}

export default App
