import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, TextSphere, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className ="relative z-0 bg-nblue">
        <div className="bg-cover bg-no-repeat bg-center">
       
        <Navbar />
        <div style={{ backgroundImage: "url('src/assets/cell.png')", width: "100%", height: "100%" }}>
        <Hero />
        </div>
        </div>
     
      
      
      <div className="relative z-0">
        <div>
          <About/>
          <TextSphere/>
        </div>
    
      <Experience />
      
      <Works />
      
        
        <Contact />
        <StarsCanvas />

      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
