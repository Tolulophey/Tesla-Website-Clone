import React from 'react'
import './NinthBanner.css'
import wears from './Data'
import { Link } from 'react-router-dom'

const NinthBanner = () => {
  return (
    <div className="cards">
        {wears.map((cards,index)=>{
        return(
          <div className="cards-container" key={index+1}>
             <img src={cards.image} alt="img" className="product-images"/>
             <div className="card-container-content">
              <p className='card-text'>{cards.name}</p>
              <Link to={cards.link} className="men-shop">Shop Now</Link>
             </div>
          </div>
           
        )
        })}
    </div>
  )
}

export default React.memo(NinthBanner)