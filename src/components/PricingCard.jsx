import React from 'react'
import "./PricingCard.css"
import { Link } from 'react-router-dom'

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="cardContainer d-flex row ">
        <div className="card">
          <h3>
            - Basic - 
          </h3>
          <span className='var'></span>
          <p className='ca'>
            $ 100
          </p>
          <p className="cb">
            - 3 Days -
          </p>
          <p className="cc">
            - 3 Pages -
          </p>
          <p className="cd">
            Featured
          </p>
          <p className="ce">
            Responsive Designs
          </p>
          <Link>
            <button className='cf'>
              Purchase Now
            </button>
          </Link>
        </div>
        <div className="card">
          <h3>
            - Basic - 
          </h3>
          <span className='var'></span>
          <p className='ca'>
            $ 100
          </p>
          <p className="cb">
            - 3 Days -
          </p>
          <p className="cc">
            - 3 Pages -
          </p>
          <p className="cd">
            Featured
          </p>
          <p className="ce">
            Responsive Designs
          </p>
          <Link>
            <button className='cf'>
              Purchase Now
            </button>
          </Link>
        </div>
        <div className="card">
          <h3>
            - Basic - 
          </h3>
          <span className='var'></span>
          <p className='ca'>
            $ 100
          </p>
          <p className="cb">
            - 3 Days -
          </p>
          <p className="cc">
            - 3 Pages -
          </p>
          <p className="cd">
            Featured
          </p>
          <p className="ce">
            Responsive Designs
          </p>
          <Link>
            <button className='cf'>
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
// MDSCHED.EXE
export default PricingCard

