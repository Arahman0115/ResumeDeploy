import React from 'react'
import  {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc';
import { textVariant, slideIn, bounceIn } from '../Utils/motion'

const ExperienceCard = ({ experience }) =>  (

  
    <VerticalTimelineElement
      contentStyle={{ 
        background: 'linear-gradient(to bottom, #313366, #65679e)' 
      }}
      initial="hidden"
      whileInView="show"
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg}}
      icon={<div className="bg-[#313366] rounded-full flex justify-center items-center w-full h-full">
        <img 
        src={experience.icon}
        alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'
        />
      </div>}
    >

      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
          <p className='text-secondary text-[16px] font-semibold ' style={{margin:0}}>{experience.company_name}</p>
        </h3>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 
          tracking-wider'>
            {point}

          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );


const Experience = () => {
  return (
    <>
    <motion.div
        variants={bounceIn('up', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
      >
        <div className="w-5 flex flex-row h-5 rounded-full bg-white">
        </div>
      </motion.div>
    <motion.div 
      variants={slideIn('left', "tween", 0,1)}
      className = "w-full h-0.5 rounded-full bg-white mb-10"
      
      ></motion.div>
    <motion.div
    variants={textVariant()}>
        <p className= {styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience
        </h2>

    </motion.div>
    <div className="mt-20 flex flex-col">
  <VerticalTimeline>
    {experiences.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </VerticalTimeline>
  </div>

    </>
    )
}

export default SectionWrapper(Experience,"work")