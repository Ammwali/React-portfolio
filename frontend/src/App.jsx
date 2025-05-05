import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection1 from './components/HeroSection1'
import HeroSection2 from './components/HeroSection2'
import HeroSection3 from './components/HeroSection3'
import RadialSection from './components/RadialSection'
import HeroSection4 from './components/HeroSection4'
import HeroSection5 from './components/HeroSection5'
import { Element } from 'react-scroll'
function App() {
  

  return (
    <>
     <Router>
     <div className="bg-logo">AMMARAMEMON </div>
     <div className="main-bg">
       <Navbar/>
        <Element name="home"><HeroSection1 /></Element>
          <Element name="services"><HeroSection2 />
          <RadialSection />
          </Element>
          <Element name="about"><HeroSection3 /></Element>
          <Element name="projects"><HeroSection4 /></Element>
          <Element name="contact"><HeroSection5 /></Element>
     </div>
     </Router>
     
    </>
  )
}

export default App
