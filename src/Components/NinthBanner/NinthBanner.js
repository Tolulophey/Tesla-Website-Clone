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
             <div className="card-container-content">
              <p className='card-text'>{cards.name}</p>
              <button>Shop Now</button>
             </div>
          </div>
           
        )
        })}
    </div>
  )
}

export default NinthBanner