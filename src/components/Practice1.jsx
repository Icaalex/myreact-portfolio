import React from 'react'
import "../App.css"
import "./Practice1.css"
import icon from "../assets/images/myimage.png"
import { FaConnectdevelop } from 'react-icons/fa'
import { useState } from 'react';


const Practice1 = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => setCount(count + 1 )
  return (
    <div className="practiceone">
        <div className="container d-flex row space-between">
            <div className="img1">
                <img src={icon} alt="" srcset="" />
            </div>
            <h3>
                Darcy james
            </h3>
            <div className="icons">
                <FaConnectdevelop size={40} style={{color:"black"}} />
            </div>
        </div>
    </div>
  )
}

export default Practice1