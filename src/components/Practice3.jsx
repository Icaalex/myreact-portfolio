import React from 'react'
import "../App.css"
import "./Practice1.css"
import icon from "../assets/images/myimage.png"
import { FaConnectdevelop } from 'react-icons/fa'


const practice3 = ({name , icoms}) => {
  return (
    <div className="practiceone">
        <div className="container d-flex row space-between">
            <div className="img1">
                <img src={icon} alt="" srcset="" />
            </div>
            <h3>
                {name}{/* Darcy james */}
            </h3>
            <div className="icons">
                {icoms}{/* <FaConnectdevelop size={40} style={{color:"black"}} /> */}
            </div>
        </div>
        
    </div>
  )
}

export default practice3