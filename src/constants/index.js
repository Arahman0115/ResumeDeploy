import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    newpub,
    cvs,
    officedepot,
    brendys,
    carrent,
    NexusControls,
    jobit,
    tripguide,
    threejs,
    porto,
    ReactProject,
    loginpage,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "GUI Building",
      icon: mobile,
    },
    {
      title: "Healthcare Technologies",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  
  const experiences = [
    {
      title: "Pharmacy Technician",
      company_name: "Publix Pharmacy",
      icon: newpub,
      iconBg: "#383E56",
      date: "May 2021 - Current",
      points: [
        "Initiated a personal project in the development of healthcare technologies that tailor patient profiles using pharmacogenomics, marking a groundbreaking contribution to the healthcare landscape.",

        "Placed and received drug orders from different vendors, ensuring a seamless and timely supply chain.",
        
        "Determined eligibility for patients in relation to different COVID shots, considering factors such as age, dose number, and shot preference (Moderna, Pfizer).",
        
        "Handled a substantial increase in customer volume due to the demand for COVID Boosters, showcasing adaptability and efficiency in a high-pressure environment.",
        
        "Acquired proficiency in various queues, each presenting unique functionalities and tasks, demonstrating versatility in handling diverse responsibilities.",
        
        "Operated with minimal margin for error, allowing for continual improvement in the ability to troubleshoot and correct errors before the final product reached the customer, emphasizing a commitment to precision and excellence.",
      ],
    },
    
   
    {
      title: "Pharmacy Technician",
      company_name: "CVS",
      icon: cvs,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - May 2021",
      points: [
        "Assumed a pivotal role in guiding customers through a seamless pharmaceutical experience, overseeing the critical tasks of dispensing, counting, and filling prescriptions.",

        "Conducted routine drop-off procedures involving the processing and typing of prescriptions.",
        
        "Performed essential maintenance duties, including RTS and Cycle counts, ensuring precision in inventory management.",
        
        "Efficiently managed prescription queues through Queue Triage.",
        
        "Played a crucial role in assisting customers with Drive-through Covid Testing, contributing to public health initiatives.",
        
        "Took charge of incoming telephone calls, providing comprehensive information about products, services, store hours, policies, and promotions, actively enhancing the overall customer experience.",
      ],
    },
    
    {
      title: "Sales Associate",
      company_name: "Office Depot",
      icon: officedepot,
      iconBg: "#383E56",
      date: "April 2019 - Sep 2020",
      points: [
        "Honed skills in not just pitching sales but in making a significant impact by adeptly assisting customers in finding exactly what they needed.",

        "Acquired in-depth technical knowledge about laptops, monitors, printers, and furniture through rigorous training and self-directed research.",
        
        "On the sales floor, elevated contribution by providing comprehensive product and service consultations for laptops, monitors, printers, and furniture, ensuring that customers made informed decisions.",
        
        "Played a pivotal role in executing online orders, further streamlining the customer experience and contributing to the overall success of the sales process.",
      ],
    },
    {
      title: "Creative Director",
      company_name: "Brendy's of Wellington",
      icon: brendys,
      iconBg: "#E6DEDD",
      date: "Dec 2011 - Nov 2015",
      points: [

        "Immersed in Photoshop and G-Suite, contributing to the creation of captivating flyers that significantly boosted our promotional efforts.",

        "Actively participated in marketing initiatives, playing a key role in organizing events to propel the business forward.",
        
        "Instrumental in shaping the visual identity of our brand through the design and implementation of the store sign.",
        
        "Focused on leveraging creativity to enhance the overall marketing strategy and visual aesthetics of the business.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ReactJS Resume",
      description:
        "ReactJS website that transformed my Resume from a plain word document into a fully 3D Reactive Platform"
        
        ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: porto,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pharmacogenomic Software",
      description:
        "Seamlessly integrating pharmacogenomics into pharmacy software, the platform empowers healthcare professionals with a user-friendly interface for informed decisions based on individual genetic data. This advancement signals a new era in precision and efficiency for personalized medication management and patient care.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },

      ],
      image: loginpage,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };