import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
import "../App.css"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container d-flex row">
            <div className="left d-flex-2 col">
                <div className="location d-flex-2 row">
                    <FaHome size={19} style={{color:"white"}}/>
                    <p>Abuja, Nigeria</p>
                </div>
                <div className="phone ">
                  <b className="d-flex-2 row">
                    <FaPhone size={19} style={{color:"white"}}/>
                    <p>+234 7042 350 852</p>
                  </b>
                </div>
                <div className="email d-flex-2 row">
                 <FaMailBulk size={19} style={{color:"white"}}/>
                 <p>ndukwuuju6@gmail.com</p>
                </div>
            </div>
            <div className="right">
              <h4>About  us</h4>
              <p>We are concerned with analyaing and solving your site problems, improving user experience and making engagement on ypur website seamless.
                 we have worked on projects which have gotten great feedback and recommendation.
                 Looking for the best in what we do, is and will always be our goal.
              </p>
              <div className="socialicon d-flex-2 row">
                <FaTwitter size={30} style={{color:"#ddd", paddingRight:"12px"}}/>
                <FaInstagram size={30} style={{color:"#ddd" , paddingRight:"12px"}}/>
                <FaLinkedin size={30} style={{color:"#ddd" , paddingRight:"12px"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer