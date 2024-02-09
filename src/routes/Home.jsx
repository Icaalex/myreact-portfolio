import React from "react";
import "../App.css"
import Navbar from '../components/Navbar';
import Herosection from '../components/Herosection';
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div className="Container">
            <Navbar/>
            <Herosection/>
            <Footer/>
            
        </div>
    )
}

export default Home