import "./Work-cards.css"
import React from 'react'
import { Link } from 'react-router-dom';



const Workcard = (props) => {
  return (
    <div className="contents justify-center">
      <div className="wraps d-flex row">
        <div className="cards">
            <div className="imgcont">
                <img src={props.imga} alt="" />
            </div>
            <div className="headen">
                <h3>{props.headen}</h3>
            </div>
            <div className="ba">
                <p>
                    {props.details}
                </p>
            </div>
            <div className="bb">
                <Link >
                  <button className="btn">{props.view}</button>
                </Link>
                <Link >
                   <button className="btn">{props.source}</button>
                </Link>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Workcard