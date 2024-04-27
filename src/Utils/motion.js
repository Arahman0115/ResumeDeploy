export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  export const fadeOut = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  export const fadeInOut = (direction, type, delay, duration) => {
    const exitDistance = 100; // Adjust the distance the element will move during exit
  
    return {
      hidden: {
        x: direction === "left" ? exitDistance : direction === "right" ? -exitDistance : 0,
        y: direction === "up" ? exitDistance : direction === "down" ? -exitDistance : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
      exit: {
        x: direction === "left" ? -exitDistance : direction === "right" ? exitDistance : 0,
        y: direction === "up" ? -exitDistance : direction === "down" ? exitDistance : 0,
        opacity: 0,
        transition: {
          type: type,
          duration: duration,
          ease: "easeIn", // You can adjust the ease function for the exit animation
        },
      },
    };
  };

  export const bounceIn = (direction, type, delay, duration) => {
    const amplitude = 10; // Adjust the amplitude of the bounce
    const frequency = 0.1; // Adjust the frequency of the bounce
  
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 1000 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeInOut",
        },
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
        },
        scale: 1.2,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          velocity: 2,
        },
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          velocity: 2,
        },
      },
    };
  };
  
  
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };
