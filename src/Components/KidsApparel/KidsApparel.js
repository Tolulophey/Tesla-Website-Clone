import React from 'react'
import './KidsApparel.css'
import wears from './KidsData'
// import ShopNavbar from '../ShopNavbar/ShopNavbar'
// import { Link } from 'react-router-dom'

const MenApparel = () => {
  return (
    <div className="kidsApparel">
        <h1>Kids</h1>
        <p>Best Sellers</p>
        <div className='kids-container'>
          {wears.map((kids,index)=>{
          return(
            <div className="kids-card">
              <img src={kids.image} alt="img" key={index+1}/>
              <div className="womenapparel-card-container-content">
                <p className='item-name'>{kids.name}</p>
                <p className='item-price'>{kids.price}</p>
              </div>
            </div>
            
          )
          })}
        </div>
      
    </div>
  )
}

export default MenApparel