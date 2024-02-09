import "./Work.css"
import React from 'react'
import Workcard from './Work-cards'
import ProjectData from "./WorkData"
import Projects from './../routes/Projects';
const Work = () => {
  return (
    <>
     <div className="work ">
        <div className="wrapper">
            <div className="head">
              <h2>Projects</h2>
            </div>
            {ProjectData.map((val, index) => {
                return(
                    <Workcard key={index}   
                              imga = {val.imga}
                              headen = {val.headen}
                              details = {val.details}
                              view = {val.view}
                              source = {val.source}
                    />
                )
            })}
            
        </div>
        
     </div>
    </>
  )
}

export default Work