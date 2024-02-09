import React, { Component } from 'react'
import "../App.css"
import "./Practice1.css"
import { FaConnectdevelop } from 'react-icons/fa'



export class Practice4 extends Component {
  render() {
    const {name, icoms} = this.props
    return (
     <div className="practiceone">
        <div className="container d-flex row space-between">
            <div className="img1">
                <img src="/images/myimage.png" alt="" srcset="" />
            </div>
            <h3>
                {name}
            </h3>
            <div className="icons">
                ${icoms}
            </div>
        </div>
     </div>
    )
  }
}

export default Practice4