import React from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// New component for generating random stars
const StarField = ({ numStars = 1000 }) => {
  const stars = Array.from({ length: numStars }).map((_, index) => (
    <mesh key={index} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
      <sphereGeometry args={[0.1]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  ));

  return <>{stars}</>;
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
           <BallCanvas icon={technology.icon} />
        </div>
      
      ))}
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
