import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, slideIn, textVariant } from '../Utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      //[#6B240C]
      className='bg-gradient-to-b from-[#313366] to-[#65679e] p-5 rounded sm:w-[360px] h-[550px] w-full'

      >
        <div className = 'relative w-full h-[230px]'>
        <img 
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2x1'
        />
          <div className = 'absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, 'blank')}
              className='black-gradient w-10 h-10 rounded-full
              flex justify-center items-center cursor-pointer '
              >
                <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                />
            </div>

          </div>
        </div>

        <div className = 'mt-5'>
        <h3>{name}</h3>
        <p className = 'mt-2 text-secondary text-[14px]'> 
          
          {description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            {tag.name}
          </p>
        ))}
      </div>


      </Tilt>
    </motion.div>
  ) 
}

 const Works = () => {
  return (
    <>
        <motion.div 
      variants={slideIn('left', "tween", 0,1)}
      className = "w-full h-0.5 rounded-full bg-white mb-10"
      
      ></motion.div>
    <div className='bg-black bg-opacity-30 flex flex-wrap rounded-2xl w-[1100px] h-[1000px] mt-10 mb-5'>

     <motion.div
     className='mt-5 ml-5'
    variants={textVariant()}>
        <p className= {styles.sectionSubText}>
        My Projects
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects.
        </h2>

    </motion.div>
    <div className = 'w-full flex'>
      <motion.p 
      variants={ fadeIn("","", 0.1, 1)}
      className = "mt-3 ml-5 text-white text-[17px] max-w-3x1 leading-[30px]"
      >
        Each project displays the knowledge I have acquired through working
        on various JS and Python coded programs. The final project reflects my
        ability to use this knowledge to structure Pharmacy Software, contributing
        to the advancement of healthcare technologies. 
</motion.p>
</div>
<div className='mt-20 ml-20 flex flex-wrap justify-center gap-7'>
  {projects.map((project, index) => (
    <ProjectCard 
      key={`project-${index}`}
      index={index}
      {...project}
    />
  ))}
</div>
</div>
</>

  )
}

export default SectionWrapper(Works,"");