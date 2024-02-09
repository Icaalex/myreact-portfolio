import React, { Component } from 'react'
import Navbar from "../components/Navbar";
import Herosection2 from "../components/Herosection2";
import Footer from "../components/Footer";
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

export default class Projects extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar/>
        <Herosection2 heading="projects" paragraph="Some of my most recent works"/>
        <Work/>
        <PricingCard/>
        <Footer/>
        
      </div>
    )
  }
}







// import React from "react";
// import Navbar from "../components/Navbar";
// import Herosection2 from "../components/Herosection2";
// import Footer from "../components/Footer";

// const Projects = () => {
//     return(
//         <div className="Container">
//             <Navbar/>
//             <Herosection2/>
//             <Footer/>
            
//         </div>
//     )
// }

// export default Projects

