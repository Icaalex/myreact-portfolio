import "./Navbar.css"
import React, { createContext } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react"


export const ThemeContext = createContext ("null")

const Navbar = () => {
  
   const [theme , setTheme] = useState("light")
   const toggleTheme = () => {
      setTheme((curr) => ( curr === "light" ? "dark" : "light"))
   }
   const [clicknav, setClicknav] = useState(false)
   const handleClicknav = () => setClicknav(!clicknav)
   const [colorbg, setColorbg] = useState(false)
   const handleColorbg = () => {
     if (window.scrollY >= 100) {
       setColorbg(true)
     } else {
       setColorbg(false)
     }
   }
   window.addEventListener("scroll", handleColorbg)

  return (
    <ThemeContext.Provider value = {{theme,toggleTheme}}>
      <div id="light" className={clicknav ? "header active ": "header"} className={colorbg ? ("header header-bg"): ("header")}>
        <Link to="/">
            
          <div className="sp " id="light"><span>I</span>Uju Ndukwu
          </div>
          
        </Link>

        <ul id="light" className={clicknav ? "nav-menu active" : "nav-menu"}>
            <li id="light"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li id="light"><Link to="/projects">Projects</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>



        </ul>
        <div id="light" className="hamburger" onClick={handleClicknav}>
          {clicknav ?(<FaTimes size= {28} style={{color:"#fff"}}/>)
          :(<FaBars size={28} style={{color:"#fff"}}/>)
        }
          
          
        </div>
      </div>
    </ThemeContext.Provider>
    
  )
}

export default Navbar