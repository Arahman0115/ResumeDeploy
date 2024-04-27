import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import {services } from '../constants'
import { fadeIn, textVariant, fadeOut, fadeInOut } from '../Utils/motion';
import { SectionWrapper} from "../hoc"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full mr-5'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 2)}
      className='w-full nblue-gradient p-[1px] rounded-[20px] shadow-card'
      initial="hidden"
      whileInView="show"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#313366] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className='bg-{#414288} bg-opacity-20 flex sm:w-[950px] flex-wrap rounded-2xl w-[1500px] h-[700px] mb-5'>
    <div className='mt-5'> 
    <motion.div variants={textVariant()}>
      <p className= {`ml-5 mt-5 shadow-[0_35px_60px_-15px_rgba(2,2,2,0.3)] ${styles.sectionSubText}`}>
        Introduction
      </p>
      <h2 className={`ml-5 ${styles.sectionHeadText}`}>
        Overview
        </h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("","",0.1,1)}
    className= "mt-4 ml-5 text-white text-[17px] max-w-3x1 leading-[30px]">
      I channel my creative energies into the realm of 3D visualizations and web development,
          transforming digital landscapes into captivating works of art.
    </motion.p>
    </div>
    <div className="mt-20 ml-5 flex flex-wrap gap-10">
      {services.map((service,index)=> (
        <ServiceCard key={service.title} index= {index} {...service} />
      ))}
    </div>
    
    </div>
  )
}

export default SectionWrapper (About, "about")