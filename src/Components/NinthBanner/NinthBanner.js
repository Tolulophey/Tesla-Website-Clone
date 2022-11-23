import React from 'react'
import './NinthBanner.css'
import wears from './Data'

const NinthBanner = () => {
  return (
    <div className="cards">
        {wears.map((cards,index)=>{
        return(
          <div className="cards-container">
             <img src={cards.image} alt="img" key={index+1} className="product-images"/>
             <p className='card-text'>{cards.name}</p>
             <button className='shop-now'>Shop Now</button>
          </div>
           
        )
        })}
    </div>
  )
}

export default NinthBanner