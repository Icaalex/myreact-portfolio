import React from 'react'
import "../App.css"
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Practice1 from '../components/Practice1';
import Practice2 from '../components/Practice2';
import { FaBars, FaTimes } from 'react-icons/fa';
import Practice4 from '../components/Practice4';
import { Practice5 } from './../components/Practice5';


const Practice = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Practice1/>
        <Practice2  name="hasta NdUKWU" icoms={<FaTimes/>} />
        <Practice2  name="Uju nDUKWU" icoms={<FaBars/>} />
        <Practice4 name = "jennifer james" icoms= {23.45}/>
        <Practice5/>
        

        <Footer/>

    </div>
  )
}

export default Practice