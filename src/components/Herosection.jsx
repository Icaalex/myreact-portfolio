import "./Herosection.css"
import "../App.css"
import React from 'react'
import imgA from "../assets/images/myimage.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Herosection = () => {
  //  const [count, setCount] = useState{0}
  //  const handleCount 

  return (
    <div className="Wrapper">
      <div className="myimage">
          <div className="myimg">
              <img src={imgA} alt="myimage" srcset="" />
          </div>

      </div>
      <div className="container ">
        <div className="myself d-flex col">
          <h1>Nice to meet you! I'm Uju Ndukwu.</h1>
          <p>I am a frontend web developer. <br/>
            I love to analyze problems and solve<br/> them with skills 
            attained in order to create the best <br/>products for my clients. 
            Looking for the best in projects is <br/>and will always be my goal.
          </p>
          <div className="btnd">
            <Link to="/contact" className="btne"> Contact me</Link>
          </div>
        </div>
        
      </div>
        

    </div>
  )
}

export default Herosection


{/* <div className="genText">
          <p>Hi, I am a frontend web developer. I bring <br/>your imaginations to fruition.</p>
        </div>
         <div className="myPics">
            <img src={imgA} alt="myimage" srcset="" />
         </div>
          <div className="genBtn">
            <Link to = "/projects">
            <div className="btnA">
              Projects
            </div>
            </Link>
            <Link to= "/contact">
            <div className="btnB">
              Contact
            </div>
            </Link>
            
            
          </div> */}