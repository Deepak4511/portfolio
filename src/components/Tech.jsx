import React from 'react'
import { styles } from "../style";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I Use</p>
        <h2 className={styles.sectionHeadText}>Skills and Technologies</h2>
      </motion.div>
         <div className="mt-10 flex flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="w-28 h-28"
            variants={fadeIn("up", "spring", index * 0.2, 0.5)}
          >
            <div className="tech_icon relative w-full h-full flex items-center justify-center  rounded-4xl border  shadow-md p-4 bg-[#050816]">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-center mt-2 text-sm font-medium">{technology.name}</p>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Tech, "");


