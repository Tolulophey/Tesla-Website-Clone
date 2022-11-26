import React from 'react'
import './WomenApparel.css'
import wears from './WomenData'
// import ShopNavbar from '../ShopNavbar/ShopNavbar'
// import { Link } from 'react-router-dom'

const MenApparel = () => {
  return (
    <div className="womenApparel">
        <h1>Women</h1>
        <p>Best Sellers</p>
        <div className='women-container'>
          {wears.map((women,index)=>{
          return(
            <div className="women-card">
              <img src={women.image} alt="img" key={index+1}/>
              <div className="womenapparel-card-container-content">
                <p className='item-name'>{women.name}</p>
                <p className='item-price'>{women.price}</p>
              </div>
            </div>
            
          )
          })}
        </div>
      
    </div>
  )
}

export default MenApparel