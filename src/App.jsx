import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

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
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
