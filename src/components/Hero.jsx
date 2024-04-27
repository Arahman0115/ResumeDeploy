import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className = {`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}> 
      <div className ="flex flex-col justify-center items-center mt-5">
        <div className = "w-5 h-5 rounded-full bg-[#414288]"/>
        <div className = "w-1 sm:h-80 h-40 blew-gradient"/>
      </div>

      <div className = "text-container bg-opacity-10 bg-white rounded-2xl w-[1000px] h-[400px]">
        <h1 className = {`${styles.heroHeadTextVariant}
        text-white ml-5`}>
          Hi, I'm <span className= "text-[#414288]">
            Ahnaf
          </span>
        </h1>
        <p className = {`${styles.heroSubTextVariant} mt-2 ml-5 text-[white]`}>
        I specialize in crafting Python-based Graphical User <br className = "sm:block hidden " /> Interfaces,
         with a strong emphasis on pioneering healthcare software solutions for the future. 
         Additionally, I channel my creative energies into the realm of 3D visualizations and web development,
          transforming digital landscapes into captivating works of art.
        </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero