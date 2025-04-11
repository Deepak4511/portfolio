import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from '../assets';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
           <Tilt 
           options={{max: 45, scale: 1, speed: 450}} className='bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[230px]'>
                  <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
                  <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
                </div>
                <div className='mt-5'>
                  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        {tag.name}
                      </p>
                    ))}
                    </div>

                </div>
           </Tilt>
        </motion.div>
    )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects</h2>
          </motion.div>
          <div className='mt-10 flex'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </motion.p>

          </div>
          <div className='mt-10 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
    </>
  )
}

export default SectionWrapper(Works, "")
