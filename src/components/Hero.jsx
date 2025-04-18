import React from 'react';
import { styles } from '../style';
// import compImg from '../assets/comp.png';
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start`}>
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915eff]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Deepak Kumar</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am Full Stack Developer</p>
      </div>
      
    </div>
    <ComputersCanvas />
    {/* <img src={compImg} alt='computer' className='w-00 m-auto'/> */}
    </section>
  )
}

export default Hero;
