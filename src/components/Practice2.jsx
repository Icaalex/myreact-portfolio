import React from 'react'
import "../App.css"
import "./Practice1.css"
import icon from "../assets/images/myimage.png"
import Practice3 from './Practice3';



const practice2 = ({name, icoms}) => {
  return (
    <div className="practicetwo">
       <div className="container d-flex row space-between">
            <div className="img1">
              <img src={icon} alt="" srcset="" />

            </div>
            <h3>
                {name}
            </h3>
            <div className="icons">
                {icoms}
            </div>
        </div>
        <Practice3 name = {name} icoms ={icoms}/>
    </div>
  )
}

export default practice2