import React, {useState, createContext} from "react"
import "./Herosection2.css"
import "../App.css"
import imgA from "../assets/images/myimage.png"
import { Link } from "react-router-dom";


export const ThemeContext =  createContext("null")
const Herosection2 = ({heading, paragraph}) => {

   const [theme, setTheme] = useState("light")
   const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
   }

  return (
  <ThemeContext.Provider>
    <div className="Wrapper" id="light">
    <div className="myimage">
        <div className="myimg">
            <img src={imgA} alt="myimage" srcset="" />
        </div>

    </div>
    <div className="container " id="light">
      <div className="myself d-flex col">
        <h1 id="light">{heading}</h1>
        <p id="light">{paragraph}</p>
        
      </div>
      
    </div>
      

  </div>
  </ThemeContext.Provider>
    // <div className="Herosection">
    //     <div className="header d-flex-col">
    //       <h2>{heading}</h2>
    //       <p>{paragraph}</p>
    //     </div>
    // </div>
    
  )
}

export default Herosection2



{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/0h2b4ftbZcU" title="React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}















// https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D