import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
// import Tech from './components/Tech';
import Works from './components/Works';
import Feedbacks from './components/Feedbacks';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-[#050816]">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"  style={{ backgroundImage: "url('../src/assets/herobg.png')" }}>          
            <Navbar/>
            <Hero/>
            
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <Works/>
        <Feedbacks/>
        <Contact/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
