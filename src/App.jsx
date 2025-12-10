import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portoflio from './Pages/Portoflio/portfolio'



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portoflio />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
