import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../style';
// import compImg from '../assets/comp.png';
import { ComputersCanvas } from "./canvas";


const Hero = () => {

   const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.BIRDS && window.THREE) {
        setVantaEffect(
          window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundAlpha: 0.0, // ← makes background transparent
            color1: 0x3a3275,
            color2: 0x5340d7,
            birdSize: 0.50,
            wingSpan: 15.0,
            speedLimit: 4.00,
            separation: 36.0,
            alignment: 12.0,
            cohesion: 54.0,
          })
        );
      }
    };

    const waitForVanta = setInterval(() => {
      if (window.VANTA && window.VANTA.BIRDS && window.THREE) {
        clearInterval(waitForVanta);
        initVanta();
      }
    }, 100);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-[#050816]"
      />

      <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-65 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className='text-[#915eff]'>Deepak Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Full Stack Developer
          </p>
        </div>
      </div>
    <ComputersCanvas />
    </section>
  )
}

export default Hero;
